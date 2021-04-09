import React from 'react'
import './updatefile.scss'
export default function FormUpdateField() {
    return (
        <form className="main" action>
            <div className="form-group">
                <label htmlFor>ID:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Tên lĩnh vực:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Mô tả:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <div className="form-group">
                <label htmlFor>Mã lĩnh vực:</label>
                <input type="text" name className="ha" aria-describedby="helpId" placeholder />
            </div>
            <button type="button" className="btn btn-outline-primary abc">Sửa</button>
        </form>

    )
}
