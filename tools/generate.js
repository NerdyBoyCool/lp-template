// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  {
    option: 'HTMLファイルの作成',
    defaultCase: '(snakeCase)',
    entry: {
      folderPath: './tools/templates/html',
    },
    stringReplacers: [
      { question: 'ファイル名を入力してください', slot: '__name__' },
      {
        question: 'ファイル名のtitleタグを入力してください',
        slot: '__title__',
      },
    ],
    output: {
      path: './',
      pathAndFileNameDefaultCase: '(SnakeCase)',
      overwrite: true,
    },
  },
])
