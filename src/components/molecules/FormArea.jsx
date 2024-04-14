import { IconContext } from "react-icons";
import { BsPerson } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";

import { Button } from "../atoms/Button"
import { InputField } from "../atoms/InputField"
import "../../style/molecules/FormArea.scss";
import { FormAreaHook } from "../../hooks/molecules/FormAreaHook";

export const FormArea = () => {
    const { errorMsgs, content, setContent, images, fileInput, sendTweet } = FormAreaHook();

    return (
        <>
            {errorMsgs &&
                errorMsgs.map((errorMsg, i) => {
                    return <p key={i}>{errorMsg}</p>
                })
            }
            <div className="form-area">
                <form action="">
                    <div className="icon-form">
                        <IconContext.Provider value={{ size: '1.4rem' }}>
                            <BsPerson />
                        </IconContext.Provider>
                        <InputField placeholder="いまどうしている?" value={content} onChange={e => setContent(e.target.value)} />
                    </div>
                    <div className="image-area">
                        {images &&
                            images.map((image, i) => {
                                return (
                                    <img key={i} src={image.data} alt={image.fileName} />)
                            })
                        }
                    </div>
                    <div className="button-area">
                        <label>
                            <IconContext.Provider value={{ size: '1.4rem' }}>
                                <BiPhotoAlbum />
                            </IconContext.Provider>
                            <InputField type="file" multiple onChange={e => {
                                fileInput(e);
                            }} />
                        </label>
                        <Button onClick={e => sendTweet(e)}>Post</Button>
                    </div>
                </form>
            </div>
        </>
    );
}