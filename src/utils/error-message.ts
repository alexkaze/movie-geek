const errorMessage = (status: number): string => {
  if (status === 401) return 'Пользователь не авторизован.';
  if (status === 402)
    return 'Доступно 500 запросов в день. Вы превысили квоту.';
  if (status === 403) return 'Доступ к ресурсу запрещен.';
  if (status === 404) return 'Ресурс не найден.';
  if (status === 429) return 'Слишком много запросов.';

  if (status >= 400 && status < 500) return 'Клиентская ошибка.';

  if (status === 500) return 'Внутренняя ошибка сервера.';
  if (status === 503)
    return 'Сервер недоступен из-за временной перегрузки и технического обслуживания.';

  return 'Что-то пошло не так...';
};

export default errorMessage;
