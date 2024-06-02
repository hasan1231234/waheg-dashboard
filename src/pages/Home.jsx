import React from 'react'
import logo from '../images/logo.png'
import circale1 from '../images/circale1.png'
import circale2 from '../images/circale2.png'
import logobox1 from '../images/logobox1.png'
import logobox2 from '../images/logobox2.png'
import logobox3 from '../images/logobox3.png'
import down from '../images/fi-rr-angle-small-down.png'
import mabeeat from '../images/Frame 1000004838.png'
import Dashboard from '../components/dashboard';
export default function Home() {
  return (
    <div>
        <div className="nav w-100 px-3 bg-white d-flex align-items-center justify-content-between">
            <div className='d-flex align-items-center gap-5'>
                <img src={logo} alt="" height='64px'/>
                <h3>الرئيسية</h3>
            </div>
            <div className='polit'></div>
        </div>
        <div className="d-flex gap-3">
          <Dashboard/>
         <div className="rigth-section my-5 w-100 px-5">
           <div className='d-flex justify-content-between align-items-center '>
              <div className="box-home">
                 <img src={logobox1} alt="" className='mb-5'/>
                 <div className="d-flex align-items-center gap-5">
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد الطلاب المشتركين</p>
                        <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                    </div>
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد الطلاب المشتركين</p>
                        <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                    </div>
                 </div>
              </div>
              <div className="box-home">
                 <img src={logobox2} alt="" className='mb-5'/>
                 <div className="d-flex align-items-center gap-5">
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد المدرسين</p>
                        <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                    </div>
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد المدرسين المشتركين</p>
                        <p className='fw-bold fs-3 p-0 m-0'>250</p>
                    </div>
                 </div>
              </div>
              <div className="box-home">
                 <img src={logobox3} alt="" className='mb-5'/>
                 <div className="d-flex align-items-center gap-5">
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد الكورسات</p>
                        <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                    </div>
                    <div>
                        <p className='text-secondary p-0 m-0'>عدد الكورسات المضافة مؤخرا</p>
                        <p className='fw-bold fs-3 p-0 m-0'>50</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="d-flex justify-content-between my-5">
              <div className='box-home-arbah'>
                 <div className="d-flex align-items-center justify-content-between">
                     <p>اجمالي الارباح</p>
                     <h3>20000.00 ر.س</h3>
                 </div>
                 <div className="d-flex mt-3 align-items-center justify-content-between">
                     <img src={circale1} alt="" />
                     <img src={circale2} alt="" />
                 </div>
              </div>
              <div className="box-home-mbeeat">
                 <div className="d-flex align-items-center justify-content-between">
                    <p className='fw-bold'>المبيعات</p>
                    <p className='d-flex align-items-center gap-3'><img src={down} className='curser' alt="" /><span className='text-secondary'>اخر 7 ايام</span></p>
                 </div>
                 <img src={mabeeat} alt="" className='mt-3'/>
              </div>
            </div>
         </div>

        </div>

    </div>
  )
}
