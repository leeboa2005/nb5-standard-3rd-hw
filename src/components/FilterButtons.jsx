import PropTypes from 'prop-types';
import { useState } from 'react';

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
function FilterButtons({ initialStudents, setFilteredStudents }) {
    const [minAge, setMinAge] = useState('');
    const [grade, setGrade] = useState('');

    const filterByAge = (minAge) => {
        const filtered = initialStudents.filter((student) => student.age >= minAge);
        setFilteredStudents(filtered);
    };

    const filterByGrade = (targetGrade) => {
        const filtered = initialStudents.filter((student) => student.grade === targetGrade);
        setFilteredStudents(filtered);
    };

    const resetFilter = () => {
        setFilteredStudents(initialStudents);
        setMinAge('');
        setGrade('');
    };
    return (
        <div>
            {/* 필터링 버튼들 */}
            <button onClick={() => filterByAge(18)}>18세 이상</button>
            <button onClick={() => filterByGrade('A')}>A등급</button>
            <button onClick={resetFilter}>필터 초기화</button>
        </div>
    );
}

FilterButtons.propTypes = {
    initialStudents: PropTypes.array.isRequired,
    setFilteredStudents: PropTypes.func.isRequired,
};

export default FilterButtons;
