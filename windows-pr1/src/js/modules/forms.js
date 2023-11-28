export const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  const message = {
    loading: 'Loading...',
    success: '✅success✅',
    error: '❌Error❌'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMassage = document.createElement('div');
      statusMassage.classList.add('status');
      item.appendChild(statusMassage);

      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then(res => {
          console.log('res', res);
          statusMassage.textContent = message.success;
        })
        .catch(() => statusMassage.textContent = message.error)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMassage.remove()
          }, 5000);
        });
    });
  })
}
