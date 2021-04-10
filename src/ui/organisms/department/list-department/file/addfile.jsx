import React from 'react'
import './addfile.scss'
export default function addfile() {
    return (
        <form className="main" action>
            <div className="form-group">
                <label htmlFor>Đăng ký hộ khẩu:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Chuyển khẩu:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Cắt khẩu:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Đăng ký khai sinh:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <button type="button" className="btn btn-outline-primary abc">Thêm</button>
        </form>

    )
}
