//Re-create the DOM tree shown in Step 1 using only DOM methods, avoiding innerHTML, document.write(), or editing the HTML file itself.
// tree-html-head(title-meta-meta)/body(button-script)
//
//Add a click event listener to the new button element and have it remove the <main> element from the page.
//
//This criterion is linked to a Learning OutcomeStretch Goal: Add a text input and a button which, on click, can REMOVE an element based on a CSS selector provided by the user in the textbox.
//
//This criterion is linked to a Learning OutcomeStretch Goal: Add a text input and a button which, on click, can CREATE an element and append it to the page. This element should contain text content provided by the user in the textbox.
//

const bodyElement = document.querySelector('body')


const buttonElement = document.createElement('button')
buttonElement.append('Remove')
bodyElement.prepend(buttonElement)


const scriptElement = document.querySelector('script')
const mainElement = document.createElement('main')
bodyElement.insertBefore(mainElement, scriptElement)



const imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://art-vangogh.com/image/Saint%20Remy%20(1889-90)/46%20Self-Portrait.jpg'
imageElement.alt = 'Vincent at Saint Remy'
imageElement.style.height = '400px'


const anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.append('Link to Vincent van Gogh')
anchorElement.href = 'http://art-vangogh.com/'
anchorElement.target = ' _blank'
mainElement.append(imageElement, anchorElement)





buttonElement.addEventListener('click', function () {
  mainElement.remove()
  console.log('Remove button clicked')

})
