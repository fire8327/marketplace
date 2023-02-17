// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'description',
        triggerEl: document.querySelector('#description-tab-example'),
        targetEl: document.querySelector('#description-example')
    },
    {
        id: 'questions',
        triggerEl: document.querySelector('#questions-tab-example'),
        targetEl: document.querySelector('#questions-example')
    },
];

// options with default values
const options = {
    defaultTabId: 'description',
    activeClasses: 'text-blue-600 hover:text-blue-600 border-blue-600',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};
const tabs = new Tabs(tabElements, options);