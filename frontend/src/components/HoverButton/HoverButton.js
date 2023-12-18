import React from 'react';
import Button from '../../UI/Button';
import s from './HoverButton.module.css';

function HoverButton({ active, setActive }) {
  return (
    <div className={`${s.hover} ${active && s.active}`}>
      <Button             
            onClick={(e)=> {
                    e.stopPropagation()
                    e.preventDefault()}} 
            title='Add to cart' 
            theme='hover_but' />
    </div>
  )}

export default HoverButton
