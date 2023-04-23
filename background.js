const color = '#3aa757';

chrome.storage.sync.set({ color }, () => {
    console.log('The color is green.');
});
