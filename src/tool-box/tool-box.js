export const monthMatching = {
    '01':'Jan',
    '02':'Feb',
    '03':'Mar',
    '04':'Apr',
    '05':'May',
    '06':'Jun',
    '07':'Jul',
    '08':'Aug',
    '09':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec',
};

export const checkDateValidity = (stringDate)=>{
    const dateArray = stringDate.split('-');
    const dateObject =  {
        day: dateArray[0],
        month:dateArray[1],
        year:dateArray[2]
    };
    const {day, month, year} =  dateObject;
    const validDay = parseInt(day) > 0  && parseInt(day) < 32;
    const validMonth = parseInt(month) > 0  && parseInt(month) < 13;
    const validYear = year.length === 4;
    const validDate = validDay && validMonth && validYear;
    if(!validDate){
        alert('Wrong date input!');
        return false;
    }
    const date = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
    if(!isFinite(date)){
        alert('Wrong date input!');
        return false;
    }
    return true;

};