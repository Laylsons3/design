import { inputRef } from '../pages/teste'

if (typeof window !== 'undefined') {
    // const canvas = document.querySelector('canvas#canvas');
    const canvas = document.querySelector('canvas#canvas');
    const tolerance = 170;
    const referenceColor = {r:0, g:255, b:0} //DEIXAR DINAMICO

    const image = new Image();
    image.src = '/fundo-verde2.png'; //DEIXAR DINAMICO
    image.onload = drawImage;
    function drawImage() {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0)
        processImage(ctx)
    }

    function processImage(context) {
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4 ) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]

            // const allR = data[i]
            // const allG = data[i + 1]
            // const allB = data[i + 2]

            

            // if (allR > 240 ) {
                // console.table(allR);
                // document.getElementById('res').innerHTML = somaAllR
            // }
            // console.log(allR);
                
                
            


            // const color = {r, g, b}

            // if (distance(color, referenceColor) < tolerance){
            //     data[i + 3] = 0
            // }
        }
        context.putImageData(imageData, 0, 0);
    }

}

function distance(color, reference) {
    const diff = { r: reference.r - color.r, g: reference.g - color.g, b: reference.b - color.b }
    const modulo = Math.sqrt((diff.r * diff.r) + (diff.g * diff.g) + (diff.b * diff.b))
    return modulo;
}
