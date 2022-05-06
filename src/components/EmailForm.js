import React from 'react';
import Block from "./Block";

function EmailForm(props) {
    return (
        <Block className="email-form ">
            <div className="row align-items-center justify-content-between email-form__header">
                <div className="col-12 col-md-8 px-0"><h2>ПУТЕШЕСТВУЙ С Valanta Travel Company!</h2></div>
                <div className="col p-0 ">Подписывайтесь на нашу рассылку, чтобы получать самые горячие
                    предложения
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 px-0">

                    <input type="email" className="form-control" id="email-input" placeholder="Email"/>

                </div>
                <div className="col d-flex align-items-center">
                    <div className="form-check form-check-inline my-auto">
                        <input className="email-radio-input" type="radio" name="email-radio" id="email-radio1" checked/>
                        <label className="email-radio-label" htmlFor="email-radio1">
                            Я турист
                        </label>
                    </div>
                    <div className="form-check form-check-inline my-auto">
                        <input className="email-radio-input" type="radio" name="email-radio" id="email-radio2"/>
                        <label className="email-radio-label" htmlFor="email-radio2">
                            Я турагент
                        </label>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <button className=" button">Отправить</button>
                </div>
            </div>
        </Block>
    );
}

export default EmailForm;