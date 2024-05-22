import { nanoid } from 'nanoid';

// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList({ filteredStudents }) {
    return (
        <ul>
            {/* 학생 목록을 매핑하여 각 학생의 정보를 표시합니다. */}
            {filteredStudents.map((student) => (
                <li key={nanoid()}>
                    {student.name} ({student.age}세) - {student.grade}등급
                </li>
            ))}
        </ul>
    );
}

export default StudentList;
