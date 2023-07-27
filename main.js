const dot = document.querySelector('.three_dot');
const drop_menu = document.querySelector('.drop_menu');
const create = document.querySelector('.create');
const frame = document.querySelector('.frame');
const x = document.querySelector('.x');

// drop menu appears on click
dot.addEventListener('click', () => {
    drop_menu.classList.toggle('show');
})

// drop menu disappears on click
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.drop_menu') && !target.closest('.three_dot')) {
        drop_menu.classList.remove('show');
    }
});

// iframe window opens on click
create.addEventListener('click', () => {
    frame.classList.add('frame_show');
    drop_menu.classList.remove('show');
})

//close window when click on x
x.addEventListener('click', () => {
    frame.classList.remove('frame_show');
    drop_menu.classList.remove('show');
})


// send input info
const create_job = document.querySelector('.create_job');
const keyOn_address = document.querySelector('.keyOn_address');
const keyOn_jobType = document.querySelector('.keyOn_jobType');
const keyOn_jobSource = document.querySelector('.keyOn_jobSource');
const keyOn_jobDate = document.querySelector('.keyOn_jobDate');
const keyOn_startTime = document.querySelector('.keyOn_startTime');
const keyOn_endTime = document.querySelector('.keyOn_endTime');
const keyOn_tampa = document.querySelector('.keyOn_tampa');

create_job.addEventListener('click', () => {
    const address = document.querySelector('.addressOn').value;
    const city = document.querySelector('.cityOn').value;
    const state = document.querySelector('.stateOn').value;
    const zipCode = document.querySelector('.zipOn').value;
    const area = document.querySelector('.areaOn').value;

    // Concatenate the address parts into a single address with commas
    const fullAddress = [address, city, state, zipCode, area].filter(Boolean).join(', ');

    // Input the full address into keyOn_address
    keyOn_address.innerHTML = fullAddress;

    // Retrieve the selected value from jobTypeOn
    const jobTypeSelect = document.querySelector('.jobTypeOn');
    const jobType = jobTypeSelect.options[jobTypeSelect.selectedIndex].textContent;

    // Input the job type into keyOn_jobType
    keyOn_jobType.innerHTML = jobType;

    // Retrieve the selected value from jobSource
    const jobSourceSelect = document.querySelector('.jobSourceOn');
    const jobSource = jobSourceSelect.options[jobSourceSelect.selectedIndex].textContent;

    // Input the job source into keyOn_jobSource
    keyOn_jobSource.innerHTML = jobSource;

    // Retrieve the selected value from jobDate
    const jobDateInput = document.querySelector('.jobOnDate');
    const jobDate = jobDateInput.value;

    // Input the job date into keyOn_jobDate
    keyOn_jobDate.innerHTML = jobDate;

    // Retrieve the selected value from startTime
    const startTimeSelect = document.querySelector('.startTimeOn');
    const startTime = startTimeSelect.options[startTimeSelect.selectedIndex].textContent;

    // Input the start time into keyOn_startTime
    keyOn_startTime.innerHTML = startTime;

    // Retrieve the selected value from endTime
    const endTimeSelect = document.querySelector('.endTimeOn');
    const endTime = endTimeSelect.options[endTimeSelect.selectedIndex].textContent;

    // Input the end time into keyOn_endTime
    keyOn_endTime.innerHTML = endTime;

    // Retrieve the selected value from Tampa
    const testOn = document.querySelector('.testOn');
    const test = testOn.value;

    // Input the test select into keyOn_tampa
    keyOn_tampa.innerHTML = test;

    //add close window after inter info and click create job
    frame.classList.remove('frame_show');

// save info here
const savedInfo = {
        keyOn_address: fullAddress,
        keyOn_jobType: jobType,
        keyOn_jobSource: jobSource,
        keyOn_jobDate: jobDate,
        keyOn_startTime: startTime,
        keyOn_endTime: endTime,
        keyOn_tampa: test,
}
console.log(savedInfo);
});