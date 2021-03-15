const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab Content from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add Show
    tabContentItem.classList.add('show');
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}


// Listen for Tab Click
tabItems.forEach(items => items.addEventListener('click', selectItem));