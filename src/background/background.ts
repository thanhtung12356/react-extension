chrome.runtime.onMessage.addListener((msg, sender, sendRespone) => {
    console.log(msg)
    console.log(sender)
    sendRespone('From the background script!')
})