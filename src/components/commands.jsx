import React from 'react'

const Rommands = () => {
    return (
        <div className='border p-7'>
            <h3 className='text-2xl font-bold'>commands</h3>
            <ol className='list-decimal pl-7 mt-7'>
                <li>create  todo 'task 1'</li>
                <li>delete  todo number 10</li>
                <li>mark todo 10 number completed</li>
                <li>read all todos</li>
            </ol>
        </div>
    )
}

export default Rommands