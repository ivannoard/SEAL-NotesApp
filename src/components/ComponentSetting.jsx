import React from 'react'

function ComponentSetting() {
  return (
    <div>
        <h4>Ubah Kata Sandi</h4>
        <form>
        <div className="mb-3">
            <label className="form-label">Kata Sandi Lama</label>
            <input type="password" className="form-control rounded-pill" placeholder='Masukkan Kata Sandi Lama'/>
        </div>
        <div className="mb-3">
            <label for="exampleInputPsbaru" className="form-label">Kata Sandi Baru</label>
            <input type="password" className="form-control rounded-pill" placeholder='Masukkan Kata Sandi Baru'/>
        </div>
        <div className="mb-3">
            <label className="form-label">Konfirmasi Kata Sandi Baru</label>
            <input type="password" className="form-control rounded-pill" placeholder='Masukkan Kata Sandi Baru'/>
        </div>
        <button type="submit" className="btn btn-primary rounded-pill">Simpan</button>
        </form>
    </div>
  )
}

export default ComponentSetting