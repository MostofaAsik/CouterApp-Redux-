import { useState } from 'react'
import Counter from './components/Counter'
import Stats from './components/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/CounterSlice'
import Posts from './components/Posts'


function App() {

  const counters = useSelector(state => state.counters)
  const dispatch = useDispatch()

  const increaseHandler = (counterId) => {

    dispatch(increment(counterId))
  }
  const decreaseHandler = (counterId) => {

    dispatch(decrement(counterId))

  }

  const total = counters.reduce((sum, currentValue) => sum + currentValue.value,
    0)
  return (
    <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">


        {
          counters.map(counter => <Counter
            key={counter.id}
            count={counter.value}
            increaseHandler={() => increaseHandler(counter.id)}
            decreaseHandler={() => decreaseHandler(counter.id)}
          />)
        }


        <Stats totalCount={total} />
        <Posts />

      </div>
    </div>
  )
}

export default App
