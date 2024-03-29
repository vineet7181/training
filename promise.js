function downLoadFile(url)
{
    return new Promise(function(resolve,reject){
        console.log('file is start downloading ...');
        setTimeout(()=>{
            const path=url.split('/').pop();
            resolve(path);
        },2000);
    })
}
function CompressFile(path)
{
    return new Promise(function(resolve,reject){
        console.log('file is start compressing ');
        setTimeout(()=>{
            const comp=path.split('.')[0]+'.Zip';
            resolve(comp);
        },2000);
    })
}
function uploadFile(comp)
{
    return new Promise(function(resolve,reject){
        console.log('file is start uploading ..');
        setTimeout(()=>{
            const upl='http://Localstorage'+comp;
            resolve(upl)
        },3000);
    })
}




downLoadFile('https://www.facebook.com/Profiles.jpg')
.then((path)=>{
    console.log(`file is downloaded sucessfully ...${path}`);
    CompressFile(path)
        .then((comp)=>{
            console.log(`file is compressed Successfully ${comp}`)
            uploadFile(comp)
            .then((upl)=>{
                console.log(`file is uploaded Sucessfully ...${upl}`);
                console.log('Everthing is done !!!')
            })
        })
})