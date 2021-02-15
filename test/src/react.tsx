import { useEffect, useState } from 'react'

export const Test = () => {
    const [a, setA] = useState('')

    useEffect(() => {
        if (a !== '') {
            console.log('foo')
        }
    }, [a])

    // eslint-disable-next-line react/jsx-no-bind
    return <div onClick={() => setA('aaa')}>test</div>
}
