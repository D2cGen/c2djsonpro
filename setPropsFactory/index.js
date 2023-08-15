
const path = require('path')
const execSync = require('child_process').execSync
const fs = require('fs')
const glob = require('glob')

const propsFactoryPaths = glob.sync('./src/**/propsFactory/*.ts')
const reactNaitvePath = 'node_modules/webpack-cli/bin/cli.js'

const getBuildCommands = (options) => {
    // --config ./setPropsFactory/webpack.propsFactory.ts --mode=production --define-process-env-node-env=production --entry=./src/reactnative/rnLib/propsFactory/imageFactory.ts --output-path=./distFac/reactnative/rnLib/propsFactory --output-filename=imageFactory.js
    const cwdDir = process.cwd()
    const entryFile = path.join(cwdDir, options.itemPath)
    const outPutDir = path.join(cwdDir, options.facDirname)
    return [
        '--config', path.join(__dirname, './webpack.propsFactory.ts'),
        '--mode=production',
        '--define-process-env-node-env=production',
        `--entry=${entryFile}`,
        `--output-path=${outPutDir}`,
        `--output-filename=${options.outputName}`
    ].join(' ')

}

const writePropsFactory = (propsFacIndexs) => {
    for (let facPath in propsFacIndexs) {
        let indexValues = {}
        const allFacs = propsFacIndexs[facPath]
        Object.keys(allFacs).forEach(singleFacKey => {
            const componentFac = allFacs[singleFacKey]
            indexValues[singleFacKey] = componentFac
        })
        const indexTsFile = path.join(facPath, 'index.ts')
        fs.writeFileSync(indexTsFile, `export default ${JSON.stringify(indexValues)}`);
    }
}

const webpackMainPro = ()=>{
   const cmd =  'webpack --mode=production --define-process-env-node-env=production'
   execSync(cmd, { stdio: 'inherit' });
}

const createAllJsonTemplate = ()=>{
    const mainCreateIndex = require(path.join(process.cwd(), 'dist/index.js'))
    console.log("mainCreateIndex:", mainCreateIndex)
    Object
    for(let jsonBuilderKey in mainCreateIndex){
        let jsonBuilder = mainCreateIndex[jsonBuilderKey]


        const jsonBuildOutDir = path.join(process.cwd(), 'templateJsonFile')
        fs.mkdirSync(jsonBuildOutDir, { recursive: true })
        const fileName = path.join(jsonBuildOutDir, `${jsonBuilder.buildTemplateKey()}.json`)
        fs.writeFileSync(fileName, JSON.stringify(jsonBuilder.buildTemplateJson()))
    }
}

const createDisFactory = () => {
    const propsFacIndexs = {}
    fs.rmSync(path.join(process.cwd(), 'distFac'), { recursive: true, force: true });
    propsFactoryPaths.forEach((itemPath) => {
        const fileDir = itemPath.replace('./src/', '')
        const destPropsFactoryDir = path.dirname(path.join(process.cwd(), itemPath))
        const distFac = 'distFac'
        const facDirname = path.dirname(path.join(distFac, fileDir))
        const fullFileName = path.basename(itemPath).split('.')[0]
        const outputName = `${fullFileName}.js`
        console.log("fullFileName:", fullFileName, outputName)
        fs.mkdirSync(facDirname, { recursive: true })
        if (outputName !== 'index.js') {
            const buildCommand = getBuildCommands({
                itemPath,
                facDirname,
                outputName
            })
            const reactNaitvePath = 'node_modules/webpack-cli/bin/cli.js'
            let cmd = `${reactNaitvePath} ` + buildCommand;
            console.log("cmd:",cmd)
            execSync(cmd, { stdio: 'inherit' });
            if (!propsFacIndexs[destPropsFactoryDir]) {
                propsFacIndexs[destPropsFactoryDir] = {}
            }
            propsFacIndexs[destPropsFactoryDir][fullFileName] = fs.readFileSync(path.join(facDirname, outputName)).toString()
        }
    })
    writePropsFactory(propsFacIndexs)
    webpackMainPro()
    createAllJsonTemplate()
}

createDisFactory()