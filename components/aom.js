/*
 * Basic set up
 * -------------------------------------
 */

var button = document.getElementById('button');
var container = document.getElementById('container');

button.setAttribute('tabindex', 0);
container.setAttribute('hidden', true);

// create virtual nodes that only live in a11y tree and arent connected to 
// DOM nodes
button.accessibleNode.role = "button";
button.accessibleNode.expanded = false;

/*
 * Add functionality
 * -------------------------------------
 */

// instead of using IDEF references for aria-controls, we create an array in the virtual tree
var content = new AccessibleNodeList();
content.add(container.accessibleNode);

function disclose(event) {
  // if the section is hidden, expand it
  if(container.getAttribute('hidden')) {
    button.accessibleNode.expanded = true;
    button.accessibleNode.controls = content;
    container.removeAttribute('hidden');
  }
  // if the section is open, collapse it
  else {
    button.accessibleNode.expanded = false;
    button.accessibleNode.controls = null;
    container.setAttribute('hidden', true);
  }
}

button.addEventListener('click', disclose, false);
button.addEventListener('keydown', function(event) {
  if (event.keyCode == 13 || event.keyCode ==32) {
    disclose();
  }
});



