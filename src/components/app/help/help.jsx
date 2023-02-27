import React from 'react';
import './style_help.css';

function Help() {
  return (
    <div className="help">
      <ul>
        <li className="help-list-el">
          Для получения прогноза погоды используйте строку поиска на странице
          Home, введите туда необходимый город.
        </li>
        <li className="help-list-el">
          Переключайтесь между вкладками на странице Home, чтобы получить более
          подробную информацию.
        </li>
        <li className="help-list-el">
          На странице Stats, Вы можете получить статистику по запрошенным
          городам.
        </li>
        <li className="help-list-el">
          Для добавления города в список избранных: на странице Stats во вкладке
          Now нажмите кнопку Like.
        </li>
      </ul>
    </div>
  );
}

export default Help;
