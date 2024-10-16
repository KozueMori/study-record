import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './App.css';
import { getAllRecords, addRecord, deleteRecord } from './supabase';




export const App = () => {
  
  const [studyTitle, setStudiyTitle] = useState('')
  const [studyTime, setStudiyTime] = useState(0)
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [totalTIme, setTotalTIme] = useState(0);
  
  useEffect(() => {
    setIsLoading(true)
    const getRecords = async () => {
      const records = await getAllRecords();
      setRecords(records);
      setIsLoading(false)
    }
    getRecords();
  }, []);

  const onChangeTitle = (e) => {
    setStudiyTitle(e.target.value)
  }
  const onChangeTime = (e) => {
    setStudiyTime(e.target.value)
  }
  const onClickAdd = (e) => {
    if(studyTitle === "" || studyTime === 0) {
      setError('入力されていない項目があるよ！')
      return
    }
    const newRecord = [...records, {title: studyTitle, time:studyTime}]
    setRecords(newRecord);
    addRecord(studyTitle, studyTime);
    setStudiyTitle('')
    setStudiyTime(0)
    
    const t = newRecord.reduce((acc,num) => {
      return { time: parseInt(acc.time) + parseInt(num.time) }
    })

    setTotalTIme(t.time)
  }
  const onClickDelete=(e)=>{
    const targetId = e.target.closest('dl').dataset.id;
    deleteRecord(targetId);
    const newRecord = records.filter((record) => {
      return record.id !== targetId 
    })
    setRecords(newRecord);



  }
  
  return (
    <>
    <h1 className="title">学習記録一覧</h1>
    <div className="form">
      <p>
      <label htmlFor="">
        学習内容：
        <input type="text" value={studyTitle} onChange={onChangeTitle} />
      </label>
      </p>
      <p>
      <label htmlFor="">
        学習時間：
        <input type="number"  value={studyTime} onChange={onChangeTime} />
      </label>
      </p>
      
      <p>入力されている学習内容：<span>{studyTitle}</span></p>
      <p>入力されている学習時間：<span>{studyTime}時間</span></p>
      <button onClick={onClickAdd}>登録</button>
    </div>
    
    {isLoading ? (
      <p>Lading...</p>
    ) : (
      <div className="term_list">
        {records.map( (record, index)  => {
          return (
            <dl key={index} data-id={record.id} className="list">
              <dt>◆ {record.title}：</dt>
              <dd>{`${ record.time }時間`}</dd>
              <dd><button onClick={onClickDelete}>削除</button></dd>
            </dl>
          )
        })}
      </div>
    )
    }
    
    <p>合計時間：<span>{totalTIme} / 1000(h)</span></p>
    {isError === "" ||  (
      <p>{isError}</p>
    )}
    
    </>
  )
}

