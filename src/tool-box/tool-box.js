import moment from "moment";

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

export const checkIfToday = (stringDate)=>{
    const  dateSplit = stringDate.split('-');
    const month = dateSplit[1];
    const day = dateSplit[0];
    const year = dateSplit[2];
    const now = moment(new Date()).format('DD-MM-YYYY');
    const dt = moment(new Date(parseInt(year), parseInt(month)-1, parseInt(day))).format('DD-MM-YYYY');
    return dt === now;
};

export const getDateDifference = (stringDate)=>{
    const  dateSplit = stringDate.split('-');
    const month = dateSplit[1];
    const day = dateSplit[0];
    const year = dateSplit[2];
    const now = moment(new Date());
    const dt = moment(new Date(parseInt(year), parseInt(month)-1, parseInt(day)));
    const dateDifference = dt.diff(now, 'days');
    return dateDifference;
};

export const getUrgentTasks = (tasks)=>{
    let counter = 0;
    tasks.map(task=>{
        const taskArray = Object.values(task)[0];
        taskArray.map(element=>{
            if(checkIfToday(element['taskDate'])){
                counter = counter +1;
            }
        })
    });
    return counter;
};