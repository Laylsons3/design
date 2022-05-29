import html2canvas from "html2canvas";

export const exportAsImage = async (element, imageFileName) => {
        const section = document.getElementsByTagName("html")[0];
        const body = document.getElementsByTagName("body")[0];
        let htmlWidth = section.clientWidth;
        let bodyWidth = body.clientWidth;

        const newWidth = element.scrollWidth - element.clientWidth;

        if (newWidth > element.clientWidth) {
          sectionWidth += newWidth;
          bodyWidth += newWidth;
        }

        section.style.width = htmlWidth + "px";
        body.style.width = bodyWidth + "px";  // MULTIPLICAR POR 2 PARA DOBRAR O TAMANHO DA LARGURA

        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
        section.style.width = null;
        body.style.width = null;
        };

        const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;
      
        fakeLink.href = blob;
      
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
      
        fakeLink.remove();
      };