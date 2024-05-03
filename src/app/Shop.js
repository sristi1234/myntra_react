import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as  actionCreators  from '../state/index'
import { depositMoney, withdrawMoney } from '../state/action-creator'



const Shop = () => {
    const state = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch).de
    console.log({action});
    
  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch(withdrawMoney(100))}> - </button>
       balance : {state}
      <button className="btn btn-primary" onClick={() => dispatch(depositMoney(100))}> + </button>
    </div>
  )
}

export default Shop

