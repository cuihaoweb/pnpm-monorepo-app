const base64ToFile = (base64Str: string, fileName: string, mimeType: string) => {
    const byteCharacters = atob(base64Str);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: mimeType});
    const file = new File([blob], fileName, {type: mimeType});

    return file;
};
