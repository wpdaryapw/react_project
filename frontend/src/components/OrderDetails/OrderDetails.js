import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../UI/Button"
import s from './OrderDetails.module.css'
import ModalOrder from "../ModalOrder/ModalOrder"

function OrderDetails({orderItems, orderSum}){
    const [active, setActive] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onSubmit' })

  const inputName = register('name', {
    required: 'Name required',
    pattern: {
      value: /^[A-Za-zА-Яа-яЕЁё]+$/,
      message: 'Only letters in name allowed'
    }
  })

  const inputPhone = register('phone', {
    required: 'Please enter phone number',
    pattern: {
      value: /^[0-9]*$/,
      message: 'Only numbers are allowed in phone number'
    }
  })

  const inputEmail = register('email', {
    required: 'Please enter email',
    pattern: {
      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
      message: 'Please enter valid email'
    }
  })

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true)
    setActive(true)
  }

    return(
        <div className={s.wrapper}>
            <div className={s.order_details}>
                <h2 className={s.form_title}>Order details</h2>
            <div className={s.order_finance_details}>
          <p className={s.items_number}>{orderItems} {orderItems === 1 ? 'item':'items'}</p>
          <div className={s.order_sum_field}>
            <p className={s.order_sum_title}>Total</p>
            <p className={s.order_sum_value}>${orderSum}</p>
          </div>
        </div>
      </div>
                <div className={s.form_wrapper}>
        <form className={s.order_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputName}
                placeholder={errors.name?.message || 'Name'}
              />
              {errors.name && <span className={s.error_message}>{errors.name.message}</span>}
            </div>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputPhone}
                placeholder={errors.phone?.message || 'Phone Number'}
              />
              {errors.phone && <span className={s.error_message}>{errors.phone.message}</span>}
            </div>
            <div className={s.input_wrapper}>
              <input
                className={s.input_field}
                {...inputEmail}
                placeholder={errors.email?.message || 'Email'}
              />
              {errors.email && <span className={s.error_message}>{errors.email.message}</span>}
            </div>
            <ModalOrder active={active} setActive={setActive}/>
            <Button
        onClick={() => isValid && setActive(true)}
        title={formSubmitted ? 'The Order is Placed' : 'Order'}
        theme={formSubmitted ? 'success' : 'order'}
      />
          </form>
        </div>
    </div>
    )
}

export default OrderDetails