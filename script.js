const videoElement = document.getElementById('video');
const startBtn = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
            videoElement.requestPictureInPicture();
            videoElement.play();  
       }
    }catch(error){
        console.log('Error: ', error);
        //catch errors
    }
    // Start Picture in Picture
}

//Event Listener
startBtn.addEventListener('click', async () => {
    // Disable Button
    startBtn.disabled = true;

    selectMediaStream();

    // Reset Button
    startBtn.disabled = false;
})