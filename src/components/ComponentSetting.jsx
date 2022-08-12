import React from 'react'

function ComponentSetting() {
  return (
    <div className='border px-5 py-5 '>
        <h4>Ubah Kata Sandi</h4>
        <form className='py-3'>
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
        </form>
        <div className='d-grid gap-2 col-4 mx-auto'>
          <button type="submit" className="btn btn-primary rounded-pill">Simpan</button>
        </div>
    </div>
  )
}

export default ComponentSetting