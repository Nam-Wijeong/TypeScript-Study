{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2})
  const dayOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript 
  // enum : 지정하지 않으면 0부터 시작함, 문자열은 하나하나 다 할당해줘야함
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
  }
  console.log(Days.Monday);

  const day:Days = Days.Thursday;
  console.log(day);
  
  
}