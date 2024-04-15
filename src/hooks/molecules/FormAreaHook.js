import { useState } from "react";
import { axiosInstance } from "../../axios/axiosInstance";

export const FormAreaHook = () => {
    const [images, setImages] = useState([]);
    const [content, setContent] = useState('');
    const [imageDatas, setImageDatas] = useState([]);
    const [imageNames, setImageNames] = useState([]);
    const [errorMsgs, setErrorMsgs] = useState([]);
    const { instance } = axiosInstance();

    const fileRead = async (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        await new Promise((resolve) => (fileReader.onload = () => resolve()));
        return fileReader.result;
    };

    const fileInput = async (e) => {
        const selectedImages = [];
        const selectedImageDatas = [];
        const selectedImageNames = [];

        if (images.length < 4) {
            for (const file of e.target.files) {
                selectedImages.push({
                    data: await fileRead(file),
                    fileName: file.name
                });
                selectedImageDatas.push(await fileRead(file));
                setImageDatas([...selectedImageDatas]);
                selectedImageNames.push(file.name);
                setImageNames([...selectedImageNames]);
            }
            setImages([...images, ...selectedImages]);
        }
    };

    const sendContent = async () => {
        return await instance.post('/api/v1/tweets', { content });
    }

    const sendImages = async (res) => {
        // return await axios.post(`${BASEURL}/api/v1/images`, {
        //     tweet_id: res.data.tweet.id,
        //     tweet_image_datas: imageDatas,
        //     tweet_image_names: imageNames
        // }, {
        //     headers: {
        //         'access-token': cookies['access-token'],
        //         'client': cookies['client'],
        //         'uid': cookies['uid']
        //     }
        // });
        return await instance.post(
            '/api/v1/images',
            {
                tweet_id: res.data.tweet.id,
                tweet_image_datas: imageDatas,
                tweet_image_names: imageNames
            }
        )
    }

    const sendTweet = async (e) => {
        try {
            e.preventDefault();
            const resContent = await sendContent();
            if (imageDatas.length > 0 && imageNames.length > 0) {
                const resTweetImages = await sendImages(resContent);
                console.log(resTweetImages);
            }
            setImages([]);
            setContent('');
            setImageDatas([]);
            setImageNames([]);
            setErrorMsgs([]);
        } catch (error) {
            setErrorMsgs(error.response.data.tweet.content);
        }
    }

    return { errorMsgs, content, setContent, images, fileInput, sendTweet };
}