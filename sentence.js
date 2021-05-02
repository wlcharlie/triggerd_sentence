const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

const target = {
  engineer: '專業的工程師',
  designer: '厲害的設計師',
  founder: '有能力的創業家'
}

function wordPackage(character) {
  const i = Math.floor(Math.random() * task[character].length)
  const k = Math.floor(Math.random() * phrase.length)

  return `身為一個${target[character]}，${task[character][i]}，${phrase[k]}吧！`
}

module.exports = wordPackage