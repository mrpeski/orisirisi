import React from 'react'
import * as styles from '../styles/Dropdown.module.css'

export const Dropdown = (props) => {
    const [active, setActive] = React.useState(props.defaultSelected)
    const [show, setShow] = React.useState(false)

    const closeDropdown = React.useCallback(
        (e: MouseEvent) => {
            e.preventDefault()
            const target: any = e.target
            if (show && !target.classList.contains(styles.button)) {
                setShow(false)
            }
        },
        [show],
    )

    React.useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [closeDropdown])

    if (!props.list) return null

    const handleSelect = (e) => {
        e.preventDefault()
        setActive(e.target.getAttribute('data-id'))
        setShow(false)
        if (props?.onSelect) props.onSelect(e.target.getAttribute('data-id'))
    }
    const toggleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <article className={styles.wrapper}>
            <button
                onClick={toggleShow}
                className={[styles.button, styles.active].join(' ')}
            >
                {props.list.find((item) => item.id === active)?.label}
            </button>
            <ul className={[styles.ul, show ? styles.show : styles.hide].join(' ')}>
                {props.list.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={handleSelect}
                            className={[
                                styles.button,
                                item.id === active ? styles.active : '',
                            ].join(' ')}
                            data-id={item.id}
                        >
                            {item.label || item.id}
                        </button>
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Dropdown
