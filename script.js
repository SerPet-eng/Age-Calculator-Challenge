document.addEventListener('DOMContentLoaded', () => {
  const buttonEl = document.getElementById('button');
  const dayInput = document.getElementById('daysInput');
  const monthInput = document.getElementById('monthsInput');
  const yearInput = document.getElementById('yearsInput');

  const daysEl = document.getElementById('days');
  const monthsEl = document.getElementById('months');
  const yearsEl = document.getElementById('years');

  const dayMessErr = document.getElementById('dayMessErr');
  const monthMessErr = document.getElementById('monthMessErr');
  const yearMessErr = document.getElementById('yearMessErr');

  buttonEl.addEventListener('click', () => {
    const dayValue = dayInput.value;
    const monthValue = monthInput.value;
    const yearValue = yearInput.value;

    if (!dayValue && !monthValue && !yearValue) {
      showAllErrors();
    } else {
      resetErrors();

      if (dayValue <= 1 || dayValue >= 31) {
        dayInput.classList.add('dayError');
        dayMessErr.style.display = 'inline';
        dayMessErr.textContent = 'Must be a valid day';
      }
      if (monthValue <= 1 || monthValue >= 12) {
        monthInput.classList.add('monthError');
        monthMessErr.style.display = 'inline';
        monthMessErr.textContent = 'Must be a valid month';
      }
      if (yearValue <= 1940 || yearValue >= 2099) {
        yearInput.classList.add('yearError');
        yearMessErr.style.display = 'inline';
        yearMessErr.textContent = 'Must be a valid year';
      }
      getValue(dayValue, monthValue, yearValue);
    }
  });

  function resetErrors() {
    dayInput.classList.remove('dayError');
    monthInput.classList.remove('monthError');
    yearInput.classList.remove('yearError');

    dayMessErr.style.display = 'none';
    monthMessErr.style.display = 'none';
    yearMessErr.style.display = 'none';
  }

  function showAllErrors() {
    dayInput.classList.add('dayError');
    monthInput.classList.add('monthError');
    yearInput.classList.add('yearError');

    dayMessErr.textContent = 'Must be a valid date';

    dayMessErr.style.display = 'inline';
  }

  function getValue(days, months, years) {
    const currentDate = new Date();
    let getDays = days - currentDate.getDate();
    let getMonths = months - (currentDate.getMonth() + 1);
    let getYears = years - currentDate.getFullYear();

    if (!days) {
      daysEl.textContent = '--';
    }
    if (!months) {
      monthsEl.textContent = '--';
    }
    if (!years) {
      yearsEl.textContent = '--';
    }

    yearsEl.textContent = Math.abs(getYears);
    monthsEl.textContent = Math.abs(getMonths);
    daysEl.textContent = Math.abs(getDays);
  }

  resetErrors();
});
