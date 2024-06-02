import React from 'react'
import logo from '../images/logo.png'
import Dashboard from '../components/dashboard'
import logobox1 from '../images/logobox1.png'
import logobox3 from '../images/logobox3.png'
import search from '../images/fi-rr-search.png'
import filter from '../images/fi-rr-filter.png'
import date from '../images/fi-rr-calendar.png'
import off from '../images/off.png'
import on from '../images/on.png'
export default function Students() {
    return (
        <div>
            <div className="nav w-100 px-3 bg-white d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-5'>
                    <img src={logo} alt="" height='64px' />
                    <h3>الطلاب</h3>
                </div>
                <div className='polit'></div>
            </div>
            <div className="d-flex gap-3">
                <Dashboard />
                <div className="rigth-section my-5 w-100 px-5">
                    <div className='d-flex justify-content-between align-items-center '>
                        <div className="box-home">
                            <img src={logobox1} alt="" className='mb-5' />
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
                            <img src={logobox1} alt="" className='mb-5' />
                            <div className="d-flex align-items-center gap-5">
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد الطلاب المفعلين</p>
                                    <p className='fw-bold fs-3 p-0 m-0'>1000</p>
                                </div>
                                <div>
                                    <p className='text-secondary p-0 m-0'>عدد الطلاب المفعلين</p>
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
                            <p className='m-0'>الطلاب</p>
                            <div className="d-flex align-items-center gap-3">
                                <div className='search d-flex align-items-center gap-3'><img src={search} alt="" /> <input type="search" className='border-0' placeholder='البحث' /></div>
                                <div className='text-secondary d-flex align-items-center gap-3'><img src={filter} alt="" /><span>تصفية</span></div>
                                <div className='text-secondary d-flex align-items-center gap-3'><img src={date} alt="" /><span>التاريخ</span></div>
                            </div>

                        </div><hr />
                        <ul className='m-0 p-0'>
                            <li className='d-flex align-items-center justify-content-between'>
                                <span className='fw-bold'>الاسم</span>
                                <span className='fw-bold'>البريد الالكتروني</span>
                                <span className='fw-bold'>رقم الهاتف</span>
                                <span className='fw-bold'>الكورس</span>
                                <span className='fw-bold'>السعر</span>
                                <span className='fw-bold'>تاريخ انتهاء الاشتراك</span>
                                <span className='fw-bold'>تاريخ التسجيل</span>
                                <span className='fw-bold'>الاجهزة المستخدمة</span>
                                <span className='fw-bold'>الحالة</span>
                            </li><hr />
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>
                                <span className='text-secondary'>ماث</span>
                                <span className='text-secondary'>250</span>
                                <span className='text-secondary'>5/12/2024</span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary'>الهاتف المحمول</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>
                                <span className='text-secondary'>ماث</span>
                                <span className='text-secondary'>250</span>
                                <span className='text-secondary'>5/12/2024</span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary'>الهاتف المحمول</span>
                                <span><img src={off} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={off} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={off} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>
                                <span className='text-secondary'>ماث</span>
                                <span className='text-secondary'>250</span>
                                <span className='text-secondary'>5/12/2024</span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary'>الهاتف المحمول</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={off} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary'>احمد</span>
                                <span className='text-secondary'>ahmed@gmail.com</span>
                                <span className='text-secondary'>0106464464</span>
                                <span className='text-secondary'>ماث</span>
                                <span className='text-secondary'>250</span>
                                <span className='text-secondary'>5/12/2024</span>
                                <div className='text-secondary d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary'>الهاتف المحمول</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={off} alt="" /></span>
                            </li>
                            <li className='d-flex mb-3 align-items-center justify-content-between'>
                                <span className='text-secondary '>احمد</span>
                                <span className='text-secondary '>ahmed@gmail.com</span>
                                <span className='text-secondary '>0106464464</span>
                                <span className='text-secondary '>ماث</span>
                                <span className='text-secondary '>250</span>
                                <span className='text-secondary '>5/12/2024</span>
                                <div className='text-secondary  d-flex flex-column align-items-center'><span>(5/12/2024)</span><span>10:45 مساء</span></div>
                                <span className='text-secondary '>الكومبيوتر &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span><img src={on} alt="" /></span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
