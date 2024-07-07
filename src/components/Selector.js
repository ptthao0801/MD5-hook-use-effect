import { useState, useEffect } from 'react';
function Selector() {
    let [selected, setSelected] = useState('0');
    let [course, setCourse] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    useEffect(() =>
    {
        switch (selected) {
            case "0":
                setCourse("Java");
                break;
            case "1":
                setCourse("Angular");
                break;
            case "2":
                setCourse("Javascript");
                break;
            case "3":
                setCourse("Php");
                break;
            default:
        }
    }
        , [selected]
    )

    return (
        <div>
            Khoá học: 
            <select onChange={handleChange}> 
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {course}</h2>
        </div>
    );
}
export default Selector;