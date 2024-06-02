import React, { useState } from 'react'
import logo from '../images/logo.png'
import Dashboard from '../components/dashboard'
import logobox1 from '../images/logobox2.png'
import logobox3 from '../images/logobox3.png'
import search from '../images/fi-rr-search.png'
import filter from '../images/fi-rr-filter.png'
import date from '../images/fi-rr-calendar.png'
import off from '../images/off.png'
import on from '../images/on.png'
import add from '../images/Frame 36.png'
import down from '../images/fi-rr-angle-small-down.png'
import close from '../images/fi-rr-cross.png'

import no from '../images/close1.png'
export default function Contact() {
    const [open , setOpen] = useState('overlay d-none')

    const openOverlay = () =>{
        setOpen('overlay d-block')
    }
    const closeOverlay = () =>{
        setOpen('overlay d-none')
    }
    return (
        <div>
            <div className={open}>
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='text-secondary'>الرسالة</p>
                        <img src={close} className='curser' alt="" onClick={() => closeOverlay()}/>
                    </div>
                   <p className='w-75 mx-auto text-center'>مرحبا.. انا احمد محمد من الرياض حاصل على
شهادة ماجستير في الفيزياء اريد الانضمام لفريق
المعلمين على المنصة</p>
<img src={no} alt="" className='ml-auto curser-pointer'/>
                </div>
            </div>
            <div className="nav w-100 px-3 bg-white d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-5'>
                    <img src={logo} alt="" height='64px' />
                    <h3>تواصل معنا</h3>
                </div>
                <div className='polit'></div>
            </div>
            <div className="d-flex gap-3">
                <Dashboard />
                <div className="rigth-section my-5 w-100 px-5">
                    <img src={add} className='curser mb-5' alt="" onClick={() => openOverlay()}/>
                    <div className='d-flex justify-content-between align-items-center '>
                        <div className="box-home">
                            <img src={logobox1} alt="" className='mb-5' />
                            <div className="d-flex align-items-center gap-5">
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد المعلمين العام</p>
                                    <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                                </div>
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد المعلمين الخاص</p>
                                    <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-home">
                            <img src={logobox1} alt="" className='mb-5' />
                            <div className="d-flex align-items-center gap-5">
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد المعلمين المفعلين</p>
                                    <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                                </div>
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد المعلمين الغير مفعلين</p>
                                    <p className='fw-bold fs-3 p-0 m-0'>250</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-home">
                            <img src={logobox3} alt="" className='mb-5' />
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
                    <div className="box-students my-5">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3">
                                <p className='m-0'>تواصل معنا</p>
                                <div className='text-secondary'><img src={down} className='curser' alt="" /><span>الكل</span></div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className='search d-flex align-items-center gap-3'><img src={search} alt="" /> <input type="search" className='border-0' placeholder='البحث' /></div>
                                <div className='text-secondary d-flex align-items-center gap-3'><img src={filter} alt="" /><span>تصفية</span></div>
                                <div className='text-secondary d-flex align-items-center gap-3'><img src={date} alt="" /><span>التاريخ</span></div>
                            </div>

                        </div><hr />
                        <ul className="m-0 p-0">
                            <li className='d-flex align-items-center justify-content-between'>
                                <span className='fw-bold'>الاسم المسجل</span>
                                <span className='fw-bold'>الاسم المرسل</span>
                                <span className='fw-bold'>البريد الالكتروني</span>
                                <span className='fw-bold'>رقم الهاتف</span>
                                <span className='fw-bold'>الرسالة</span>
                                <span className='fw-bold'>تم القراءة</span>
                                <span className='fw-bold'>تاريخ التسجيل</span>
                            </li><hr />
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={on} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={on} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={off} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={on} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={off} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={off} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={on} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>

                                <div className='text-secondary d-flex flex-column align-items-center'><span>مرحبا انا احمد من...</span><span className='text-success'>المزيد</span></div>

                                <span><img src={off} alt="" /></span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>

                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}
