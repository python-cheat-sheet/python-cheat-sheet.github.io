// ═════════════════════════════════════════════════════════════════
// Python Cheat Sheet — Bilingual Localization (RU / EN)
// ═════════════════════════════════════════════════════════════════

const TRANSLATIONS = {
  ui: {
  "ru": {
    "pageTitle": "Python Cheat Sheet | Полный интерактивный справочник Python 3.12+",
    "metaDescription": "Ультимативная интерактивная шпаргалка по Python: от базовых типов до FastAPI, Django, SQLAlchemy, Pytest, NumPy, Pandas, Asyncio и продвинутых паттернов.",
    "heroTitle": "Python Cheat Sheet",
    "heroDesc": "Интерактивный справочник по языку Python и современной экосистеме разработки: от синтаксиса и ООП до Web-фреймворков, ORM, асинхронности, анализа данных и лучших практик. Копируйте готовый код в один клик.",
    "heroBadges": {
      "version": "⚡ Python 3.12+ Ready",
      "frameworks": "🚀 FastAPI & Django",
      "tooling": "🧪 Pytest & Tools",
      "github": "GitHub Исходный код"
    },
    "search": {
      "placeholderTop": "Поиск по рецептам, функциям, фреймворкам, синтаксису...",
      "placeholderSidebar": "Быстрый поиск (Ctrl+K)...",
      "clearTitle": "Очистить поиск",
      "counterSections": "{n} разделов",
      "counterFound": "Найдено: {n}"
    },
    "categories": {
      "all": "Все разделы",
      "core": "Основы языка",
      "structures": "Структуры данных",
      "advanced": "Продвинутый Python",
      "web": "Фреймворки & Веб",
      "database": "БД & Data Science",
      "tooling": "Тестирование & DevOps"
    },
    "sidebar": {
      "subtitle": "Ultimate Pro Cheat Sheet",
      "statsSections": "30 Разделов",
      "statsRecipes": "200+ Рецептов",
      "githubBtn": "GitHub Исходный код",
      "navGroups": [
        "Основы языка",
        "Структуры данных",
        "Продвинутый Python",
        "Фреймворки и Веб",
        "Базы данных и Данные",
        "Инструменты и DevOps"
      ],
      "links": {
        "types": "Типы данных",
        "strings": "Строки и срезы",
        "control": "Условия & Match",
        "loops": "Циклы",
        "functions": "Функции",
        "lists": "Списки (list)",
        "tuples": "Кортежи (tuple)",
        "sets": "Множества (set)",
        "dicts": "Словари (dict)",
        "comprehensions": "Компрехеншены",
        "decorators": "Декораторы",
        "context_managers": "Контекст менеджеры",
        "exceptions": "Исключения",
        "files": "Файлы & Pathlib",
        "oop": "ООП и Классы",
        "typing_pro": "Типизация (Typing)",
        "asyncio_concurrency": "Asyncio & Потоки",
        "generators": "Генераторы",
        "builtins": "Встроенные функции",
        "modules": "Модули stdlib",
        "frameworks_fastapi": "FastAPI (REST API)",
        "frameworks_flask": "Flask",
        "frameworks_django": "Django ORM & Web",
        "frameworks_http": "Requests & HTTPX",
        "frameworks_sql": "SQLAlchemy 2.0",
        "data_science": "NumPy & Pandas",
        "frameworks_testing": "Pytest тесты",
        "devops_tooling": "uv, venv, pip",
        "debugging_perf": "Отладка & pdb",
        "best_practices": "Паттерны & Security"
      }
    },
    "copy": {
      "copy": "копировать",
      "copied": "скопировано! ✓",
      "toast": "Код скопирован в буфер обмена!"
    },
    "mobile": {
      "open": "☰ Меню",
      "close": "✕ Меню",
      "aria": "Открыть навигацию",
      "closeAria": "Закрыть меню",
      "toggleText": "Меню"
    },
    "backTop": "Вернуться наверх",
    "noResults": {
      "title": "Ничего не найдено по вашему запросу 🤷",
      "hint": "Попробуйте поискать по-другому или выберите категорию \"Все разделы\"."
    }
  },
  "en": {
    "pageTitle": "Python Cheat Sheet | Comprehensive Interactive Python 3.12+ Reference",
    "metaDescription": "Ultimate interactive Python cheat sheet: from basic types to FastAPI, Django, SQLAlchemy, Pytest, NumPy, Pandas, Asyncio, and advanced patterns.",
    "heroTitle": "Python Cheat Sheet",
    "heroDesc": "Interactive reference for Python and the modern development ecosystem: from core syntax and OOP to Web frameworks, ORMs, async programming, data analysis, and best practices. Copy ready-to-run code in one click.",
    "heroBadges": {
      "version": "⚡ Python 3.12+ Ready",
      "frameworks": "🚀 FastAPI & Django",
      "tooling": "🧪 Pytest & Tools",
      "github": "GitHub Source"
    },
    "search": {
      "placeholderTop": "Search recipes, functions, frameworks, syntax...",
      "placeholderSidebar": "Quick search (Ctrl+K)...",
      "clearTitle": "Clear search",
      "counterSections": "{n} sections",
      "counterFound": "Found: {n}"
    },
    "categories": {
      "all": "All sections",
      "core": "Core Language",
      "structures": "Data Structures",
      "advanced": "Advanced Python",
      "web": "Frameworks & Web",
      "database": "Databases & Data",
      "tooling": "Testing & DevOps"
    },
    "sidebar": {
      "subtitle": "Ultimate Pro Cheat Sheet",
      "statsSections": "30 Sections",
      "statsRecipes": "200+ Recipes",
      "githubBtn": "GitHub Source",
      "navGroups": [
        "Core Language",
        "Data Structures",
        "Advanced Python",
        "Frameworks & Web",
        "Databases & Data",
        "Tooling & DevOps"
      ],
      "links": {
        "types": "Data Types",
        "strings": "Strings & Slices",
        "control": "Conditions & Match",
        "loops": "Loops",
        "functions": "Functions",
        "lists": "Lists (list)",
        "tuples": "Tuples (tuple)",
        "sets": "Sets (set)",
        "dicts": "Dictionaries (dict)",
        "comprehensions": "Comprehensions",
        "decorators": "Decorators",
        "context_managers": "Context Managers",
        "exceptions": "Exceptions",
        "files": "Files & Pathlib",
        "oop": "OOP & Classes",
        "typing_pro": "Type Hints (Typing)",
        "asyncio_concurrency": "Asyncio & Threads",
        "generators": "Generators",
        "builtins": "Built-in Functions",
        "modules": "Standard Library",
        "frameworks_fastapi": "FastAPI (REST API)",
        "frameworks_flask": "Flask",
        "frameworks_django": "Django ORM & Web",
        "frameworks_http": "Requests & HTTPX",
        "frameworks_sql": "SQLAlchemy 2.0",
        "data_science": "NumPy & Pandas",
        "frameworks_testing": "Pytest Testing",
        "devops_tooling": "uv, venv, pip",
        "debugging_perf": "Debugging & pdb",
        "best_practices": "Patterns & Security"
      }
    },
    "copy": {
      "copy": "copy",
      "copied": "copied! ✓",
      "toast": "Code copied to clipboard!"
    },
    "mobile": {
      "open": "☰ Menu",
      "close": "✕ Menu",
      "aria": "Toggle navigation",
      "closeAria": "Close menu",
      "toggleText": "Menu"
    },
    "backTop": "Back to top",
    "noResults": {
      "title": "No results found for your query 🤷",
      "hint": "Try searching with different keywords or select the \"All sections\" category."
    }
  }
},
  sections: {
    ru: {
  "types": {
    "id": "types",
    "cat": "core",
    "title": "Типы данных и переменные",
    "tag": "Основы языка",
    "entries": [
      {
        "title": "Основные типы данных",
        "tag": "",
        "desc": "Python — динамически и сильно типизированный язык. Всё в Python является объектом.",
        "note": null,
        "has_table": true
      },
      {
        "title": "Приведение типов и проверка",
        "tag": "ОСНОВЫ",
        "desc": "Явное преобразование встроенными функциями конструкторами.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Операторы (арифметика, логика, побитовые)",
        "tag": "",
        "desc": "Все операторы языка Python, включая целочисленные и сравнения идентичности.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Моржовый оператор := (Walrus Operator)",
        "tag": "PYTHON 3.8+",
        "desc": "Присваивание внутри выражения (Python 3.8+). Позволяет вычислить значение, сохранить в переменную и сразу использовать.",
        "note": "Моржовый оператор <code>:=</code> сокращает дублирование кода и повышает производительность, исключая повторные вычисления.",
        "has_table": false
      },
      {
        "title": "Изменяемые vs Неизменяемые (Mutable vs Immutable)",
        "tag": "",
        "desc": "Критическая концепция: изменяемые объекты меняются по ссылке. Неизменяемые создают новый объект.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "strings": {
    "id": "strings",
    "cat": "core",
    "title": "Строки и Текст",
    "tag": "Основы языка",
    "entries": [
      {
        "title": "Форматирование f-strings (PRO фишки)",
        "tag": "ТОП",
        "desc": "Современные f-строки поддерживают отладку, форматирование чисел, дат и выравнивание.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Срезы строк (Slicing)",
        "tag": "",
        "desc": "Синтаксис: <code>s[start:stop:step]</code>. Правая граница всегда НЕ включительно.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Методы строк (Полная таблица)",
        "tag": "",
        "desc": "Строки в Python неизменяемы (immutable). Любой метод возвращает НОВУЮ строку.",
        "note": null,
        "has_table": true
      }
    ]
  },
  "control": {
    "id": "control",
    "cat": "core",
    "title": "Условия и Pattern Matching",
    "tag": "Основы языка",
    "entries": [
      {
        "title": "Условные конструкции if / elif / else",
        "tag": "",
        "desc": "Ветвление логики и тернарный оператор.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Сопоставление с шаблоном: match / case (Python 3.10+)",
        "tag": "PYTHON 3.10+",
        "desc": "Структурный Pattern Matching. Намного мощнее обычного switch/case из C++/Java.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "loops": {
    "id": "loops",
    "cat": "core",
    "title": "Циклы (loops)",
    "tag": "Основы языка",
    "entries": [
      {
        "title": "Циклы for, while и вспомогательные функции",
        "tag": "",
        "desc": "Итерация по последовательностям и генераторам.",
        "note": "Блок <code>else</code> после <code>for</code>/<code>while</code> избавляет от необходимости заводить флаги <code>found = False</code> при поиске.",
        "has_table": false
      }
    ]
  },
  "functions": {
    "id": "functions",
    "cat": "core",
    "title": "Функции и Аргументы",
    "tag": "Основы языка",
    "entries": [
      {
        "title": "Аргументы функций: *args, **kwargs, /, *",
        "tag": "ПРОДВИНУТОЕ",
        "desc": "Современный синтаксис позиционно-только и ключевых-только аргументов.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Лямбда-функции (lambda) и замыкания",
        "tag": "",
        "desc": "Анонимные функции в одну строку и сохранение лексического контекста.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "lists": {
    "id": "lists",
    "cat": "structures",
    "title": "Списки (list)",
    "tag": "Структуры данных",
    "entries": [
      {
        "title": "Методы списка (list)",
        "tag": "",
        "desc": "Список — динамический изменяемый массив ссылок на объекты.",
        "note": null,
        "has_table": true
      },
      {
        "title": "Сортировка: .sort() vs sorted()",
        "tag": "",
        "desc": "<code>.sort()</code> меняет список на месте. <code>sorted()</code> возвращает новый список.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Распаковка списков и кортежей (*rest)",
        "tag": "",
        "desc": "Оператор звездочки для захвата остатка элементов.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "tuples": {
    "id": "tuples",
    "cat": "structures",
    "title": "Кортежи (tuple)",
    "tag": "Структуры данных",
    "entries": [
      {
        "title": "Кортежи (tuple)",
        "tag": "ВАЖНО",
        "desc": "Неизменяемая (immutable) упорядоченная последовательность. Занимает меньше памяти, чем list, и может быть ключом в словаре.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Именованные кортежи (namedtuple & typing.NamedTuple)",
        "tag": "",
        "desc": "Позволяют обращаться к полям по имени (как к атрибутам класса), сохраняя легковесность кортежа.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "sets": {
    "id": "sets",
    "cat": "structures",
    "title": "Множества (set)",
    "tag": "Структуры данных",
    "entries": [
      {
        "title": "Множества (set) и frozenset",
        "tag": "",
        "desc": "Коллекция уникальных хэшируемых элементов. Проверка вхождения <code>x in s</code> выполняется за O(1).",
        "note": null,
        "has_table": false
      },
      {
        "title": "Математические операции над множествами",
        "tag": "",
        "desc": "Быстрые теоретико-множественные операции через операторы.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "dicts": {
    "id": "dicts",
    "cat": "structures",
    "title": "Словари (dict)",
    "tag": "Структуры данных",
    "entries": [
      {
        "title": "Словари (dict): создание и безопасная работа",
        "tag": "MUST KNOW",
        "desc": "Хэш-таблица. С Python 3.7 гарантированно сохраняет порядок вставки ключей.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Специальные словари (collections)",
        "tag": "",
        "desc": "Counter, defaultdict — экономят десятки строк вспомогательного кода.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "comprehensions": {
    "id": "comprehensions",
    "cat": "structures",
    "title": "Компрехеншены",
    "tag": "Структуры данных",
    "entries": [
      {
        "title": "Списковые, словарные и множественные включения",
        "tag": "",
        "desc": "Компактный и идиоматичный способ создания коллекций. Выполняются на уровне языка C быстрее циклов <code>for</code>.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Генераторные выражения (Generator Expressions)",
        "tag": "",
        "desc": "Синтаксис в круглых скобках <code>(...)</code>. В отличие от list comprehension, НЕ создает список в оперативной памяти!",
        "note": "Если данные нужны только для однократного прохода или подсчета суммы/минимума — всегда используйте генераторные выражения вместо списков.",
        "has_table": false
      }
    ]
  },
  "decorators": {
    "id": "decorators",
    "cat": "advanced",
    "title": "Декораторы",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Декораторы функций и @functools.wraps",
        "tag": "ПРОДВИНУТОЕ",
        "desc": "Декоратор — это функция высшего порядка, принимающая функцию и возвращающая её модифицированную версию.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Декоратор с аргументами (Фабрика декораторов)",
        "tag": "",
        "desc": "Три уровня вложенности: фабрика -> декоратор -> обертка.",
        "note": "Порядок нескольких декораторов: <code>@dec1</code> затем <code>@dec2</code> выполняется как <code>dec1(dec2(func))</code> — снизу вверх при создании, сверху вниз при вызове!",
        "has_table": false
      }
    ]
  },
  "context_managers": {
    "id": "context_managers",
    "cat": "advanced",
    "title": "Контекстные менеджеры",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Контекстные менеджеры: with, __enter__, __exit__",
        "tag": "",
        "desc": "Гарантируют безопасное освобождение ресурсов (файлов, сокетов, локов базы данных) даже при исключении.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "exceptions": {
    "id": "exceptions",
    "cat": "advanced",
    "title": "Исключения (Exceptions)",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Обработка исключений (try / except / else / finally)",
        "tag": "",
        "desc": "Полный жизненный цикл перехвата ошибок и создание собственных исключений.",
        "note": null,
        "has_table": true
      }
    ]
  },
  "files": {
    "id": "files",
    "cat": "advanced",
    "title": "Файлы и Форматы Данных",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Современная работа с файловой системой: pathlib",
        "tag": "",
        "desc": "Модуль <code>pathlib.Path</code> из стандартной библиотеки заменяет устаревший <code>os.path</code>.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Работа с форматами: JSON, CSV, SQLite",
        "tag": "",
        "desc": "Все модули входят в стандартную библиотеку Python.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "oop": {
    "id": "oop",
    "cat": "advanced",
    "title": "ООП и Классы",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Классы, свойства (@property) и наследование",
        "tag": "",
        "desc": "Объектно-ориентированное программирование на Python.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Датаклассы (@dataclass) и оптимизация __slots__",
        "tag": "PRO",
        "desc": "Убирает бойлерплейт написания <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code>.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Магические (Dunder) методы шпаргалка",
        "tag": "",
        "desc": "Специальные методы с двойным подчеркиванием определяют поведение операторов Python.",
        "note": null,
        "has_table": true
      }
    ]
  },
  "typing_pro": {
    "id": "typing_pro",
    "cat": "advanced",
    "title": "Продвинутая Типизация",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Аннотации типов: современный синтаксис (Python 3.10+)",
        "tag": "PYTHON 3.10+",
        "desc": "Статическая типизация для mypy, IDE автодополнения и документации кода.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "asyncio_concurrency": {
    "id": "asyncio_concurrency",
    "cat": "advanced",
    "title": "Асинхронность и Параллелизм",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Асинхронное программирование: asyncio",
        "tag": "СОВРЕМЕННО",
        "desc": "Однопоточная асинхронность для I/O-bound задач (сеть, базы данных, API).",
        "note": null,
        "has_table": false
      },
      {
        "title": "Сравнение: Asyncio vs Threading vs Multiprocessing",
        "tag": "",
        "desc": "Выбор правильной модели параллелизма в зависимости от задачи.",
        "note": null,
        "has_table": true
      }
    ]
  },
  "generators": {
    "id": "generators",
    "cat": "advanced",
    "title": "Генераторы и Itertools",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Генераторы (yield) и делегирование (yield from)",
        "tag": "",
        "desc": "Ленивые последовательности: возвращают значения по запросу, не занимая память.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Модуль itertools (Золотой запас Python)",
        "tag": "",
        "desc": "Высокопроизводительные итераторы, написанные на C.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "builtins": {
    "id": "builtins",
    "cat": "advanced",
    "title": "Встроенные функции",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Ключевые встроенные функции (Built-in functions)",
        "tag": "",
        "desc": "Функции, доступные глобально без импорта в любом модуле.",
        "note": null,
        "has_table": true
      }
    ]
  },
  "modules": {
    "id": "modules",
    "cat": "advanced",
    "title": "Стандартная Библиотека",
    "tag": "Продвинутый Python",
    "entries": [
      {
        "title": "Стандартные модули: datetime, random, secrets, subprocess",
        "tag": "",
        "desc": "Базовый стек модулей, поставляемый из коробки с Python.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_fastapi": {
    "id": "frameworks_fastapi",
    "cat": "web",
    "title": "FastAPI — Web API",
    "tag": "Фреймворки и Веб",
    "entries": [
      {
        "title": "Быстрый старт с FastAPI (REST API)",
        "tag": "TOP WEB",
        "desc": "Высокопроизводительный асинхронный веб-фреймворк на базе Starlette и Pydantic. Включает автоматический интерактивный Swagger UI.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Внедрение зависимостей (Dependency Injection: Depends)",
        "tag": "",
        "desc": "Ключевая архитектурная фича FastAPI для переиспользования логики (аутентификация, БД сессии).",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_flask": {
    "id": "frameworks_flask",
    "cat": "web",
    "title": "Flask — Web Микрофреймворк",
    "tag": "Фреймворки и Веб",
    "entries": [
      {
        "title": "Микрофреймворк Flask: маршруты, JSON и Jinja2",
        "tag": "",
        "desc": "Классический легковесный WSGI фреймворк для сервисов и небольших приложений.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Модульная структура с Flask Blueprint",
        "tag": "",
        "desc": "Разбиение большого приложения на независимые модули.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_django": {
    "id": "frameworks_django",
    "cat": "web",
    "title": "Django — Web Фреймворк",
    "tag": "Фреймворки и Веб",
    "entries": [
      {
        "title": "Полнофункциональный фреймворк Django",
        "tag": "FULL-STACK",
        "desc": "Концепция «батарейки в комплекте»: встроенная админка, мощный ORM, авторизация и миграции.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Django ORM: Шпаргалка запросов",
        "tag": "ORM",
        "desc": "Быстрые примеры выборки, фильтрации и агрегации через QuerySet.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_http": {
    "id": "frameworks_http",
    "cat": "web",
    "title": "HTTP Клиенты: Requests & HTTPX",
    "tag": "Фреймворки и Веб",
    "entries": [
      {
        "title": "HTTP запросы: Requests и современный асинхронный HTTPX",
        "tag": "",
        "desc": "Выполнение сетевых запросов GET, POST, работа с JSON и заголовками.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_sql": {
    "id": "frameworks_sql",
    "cat": "database",
    "title": "SQLAlchemy 2.0 — Базы Данных",
    "tag": "Базы данных и Данные",
    "entries": [
      {
        "title": "SQLAlchemy 2.0: Современная ORM для работы с БД",
        "tag": "SQL 2.0",
        "desc": "Новый типобезопасный синтаксис 2.0 на основе Mapped и DeclarativeBase.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "data_science": {
    "id": "data_science",
    "cat": "database",
    "title": "NumPy & Pandas — Анализ Данных",
    "tag": "Базы данных и Данные",
    "entries": [
      {
        "title": "NumPy: быстрые массивы и векторизация",
        "tag": "",
        "desc": "Основа научного стека и машинного обучения. Массивы C-уровня в 50-100 раз быстрее стандартных списков.",
        "note": null,
        "has_table": false
      },
      {
        "title": "Pandas: DataFrame, фильтрация и агрегации",
        "tag": "",
        "desc": "Работа с табличными данными, CSV, Excel, фильтрация и группировка.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "frameworks_testing": {
    "id": "frameworks_testing",
    "cat": "tooling",
    "title": "Тестирование (Pytest)",
    "tag": "Тестирование и DevOps",
    "entries": [
      {
        "title": "Тестирование с Pytest: фикстуры и параметризация",
        "tag": "TESTING",
        "desc": "Стандарт де-факто для тестирования в Python. Запуск через <code>pytest -v</code>.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "devops_tooling": {
    "id": "devops_tooling",
    "cat": "tooling",
    "title": "Инструменты и Окружение (uv, pip, venv)",
    "tag": "Тестирование и DevOps",
    "entries": [
      {
        "title": "Виртуальные окружения и быстрый менеджер 'uv'",
        "tag": "UV / VENV",
        "desc": "Изоляция зависимостей и ультрабыстрый пакетный менеджер нового поколения uv (на Rust).",
        "note": null,
        "has_table": false
      },
      {
        "title": "Линтинг и форматирование (Ruff, Mypy)",
        "tag": "",
        "desc": "Современные стандарты качества кода в Python 2026.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "debugging_perf": {
    "id": "debugging_perf",
    "cat": "tooling",
    "title": "Отладка и Производительность",
    "tag": "Тестирование и DevOps",
    "entries": [
      {
        "title": "Отладчик breakpoint() (pdb) и модуль logging",
        "tag": "",
        "desc": "Встроенный отладчик Python (работает без установки внешних библиотек) и правильное логирование вместо print().",
        "note": null,
        "has_table": true
      },
      {
        "title": "Замер производительности: timeit и sys.getsizeof",
        "tag": "",
        "desc": "Измерение времени работы участков кода и расхода оперативной памяти.",
        "note": null,
        "has_table": false
      }
    ]
  },
  "best_practices": {
    "id": "best_practices",
    "cat": "tooling",
    "title": "Паттерны и Безопасность",
    "tag": "Тестирование и DevOps",
    "entries": [
      {
        "title": "Идиомы: EAFP против LBYL",
        "tag": "ИДИОМЫ",
        "desc": "Философия кода Python: «Легче попросить прощения, чем разрешения».",
        "note": null,
        "has_table": false
      },
      {
        "title": "Безопасность: 5 правил для каждого Python разработчика",
        "tag": "SECURITY",
        "desc": "Главные уязвимости и как их не допустить.",
        "note": null,
        "has_table": false
      }
    ]
  }
},
    en: {
  "types": {
    "title": "Data Types & Variables",
    "tag": "Core Language",
    "entries": [
      {
        "title": "Primary Data Types",
        "tag": "",
        "desc": "Python is dynamically and strongly typed. Everything in Python is an object."
      },
      {
        "title": "Type Casting & Checking",
        "tag": "BASICS",
        "desc": "Explicit type conversion using built-in constructor functions."
      },
      {
        "title": "Operators (Arithmetic, Logical, Bitwise)",
        "tag": "",
        "desc": "Python operators, including integer division, remainder, chained comparisons, and bitwise operations."
      },
      {
        "title": "Walrus Operator := (Assignment Expression)",
        "tag": "PYTHON 3.8+",
        "desc": "Assignment expressions inside conditions and comprehensions. Compute, bind, and use in one step.",
        "note": "The walrus operator <code>:=</code> reduces code duplication and improves performance by preventing redundant recalculations."
      },
      {
        "title": "Mutable vs Immutable Types",
        "tag": "",
        "desc": "Critical concept: mutable objects are modified by reference, whereas immutable objects create a new instance."
      }
    ]
  },
  "strings": {
    "title": "Strings & Text",
    "tag": "Core Language",
    "entries": [
      {
        "title": "f-string Formatting (PRO Tips)",
        "tag": "TOP",
        "desc": "Modern f-strings support inline debugging, number formatting, thousands separators, padding, and date formats."
      },
      {
        "title": "String Slicing",
        "tag": "",
        "desc": "Syntax: <code>s[start:stop:step]</code>. The right bound is non-inclusive. Negative indices count from the end."
      },
      {
        "title": "String Methods (Reference Table)",
        "tag": "",
        "desc": "Strings in Python are immutable. Any modification method returns a new string."
      }
    ]
  },
  "control": {
    "title": "Conditions & Pattern Matching",
    "tag": "Core Language",
    "entries": [
      {
        "title": "Conditional Statements if / elif / else",
        "tag": "",
        "desc": "Branching logic and the ternary operator."
      },
      {
        "title": "Pattern Matching: match / case (Python 3.10+)",
        "tag": "PYTHON 3.10+",
        "desc": "Structural pattern matching — far more powerful than a regular switch/case: matches data shapes, classes, and types."
      }
    ]
  },
  "loops": {
    "title": "Loops (loops)",
    "tag": "Core Language",
    "entries": [
      {
        "title": "for, while Loops and Iteration Helpers",
        "tag": "",
        "desc": "Iterating over sequences, ranges, and generator streams with helper functions.",
        "note": "The <code>else</code> clause after <code>for</code>/<code>while</code> runs only when the loop completes without a <code>break</code>, eliminating the need for boolean <code>found = False</code> search flags."
      }
    ]
  },
  "functions": {
    "title": "Functions & Arguments",
    "tag": "Core Language",
    "entries": [
      {
        "title": "Function Arguments: *args, **kwargs, /, *",
        "tag": "ADVANCED",
        "desc": "Positional-only (<code>/</code>), keyword-only (<code>*</code>), variable arguments, and unpacking."
      },
      {
        "title": "Lambda Functions & Closures",
        "tag": "",
        "desc": "Anonymous one-line functions and closures that capture surrounding scope."
      }
    ]
  },
  "lists": {
    "title": "Lists (list)",
    "tag": "Data Structures",
    "entries": [
      {
        "title": "List Methods (list)",
        "tag": "",
        "desc": "Lists are dynamic mutable arrays of object references."
      },
      {
        "title": "Sorting: .sort() vs sorted()",
        "tag": "",
        "desc": "<code>.sort()</code> mutates the list in-place. <code>sorted()</code> returns a new sorted list."
      },
      {
        "title": "Unpacking Lists & Tuples (*rest)",
        "tag": "",
        "desc": "Extended unpacking using the asterisk operator to capture remaining elements."
      }
    ]
  },
  "tuples": {
    "title": "Tuples (tuple)",
    "tag": "Data Structures",
    "entries": [
      {
        "title": "Tuples (tuple)",
        "tag": "IMPORTANT",
        "desc": "Immutable ordered sequence. Protected against accidental mutation, hashable, and safe as dict keys."
      },
      {
        "title": "Named Tuples (namedtuple & typing.NamedTuple)",
        "tag": "",
        "desc": "Allows accessing fields by name (like class attributes) without the memory overhead of a full class."
      }
    ]
  },
  "sets": {
    "title": "Sets (set)",
    "tag": "Data Structures",
    "entries": [
      {
        "title": "Sets (set) and frozenset",
        "tag": "",
        "desc": "Collection of unique, hashable items. Provides O(1) membership testing and automatic deduplication."
      },
      {
        "title": "Mathematical Set Operations",
        "tag": "",
        "desc": "Fast set-theory operations using operators: union, intersection, difference, symmetric difference."
      }
    ]
  },
  "dicts": {
    "title": "Dictionaries (dict)",
    "tag": "Data Structures",
    "entries": [
      {
        "title": "Dictionaries (dict): Creation & Safe Access",
        "tag": "MUST KNOW",
        "desc": "Hash map key-value store. Insertion order is guaranteed since Python 3.7."
      },
      {
        "title": "Specialized Dictionaries (collections)",
        "tag": "",
        "desc": "Counter and defaultdict save dozens of lines of boilerplate grouping and frequency counting code."
      }
    ]
  },
  "comprehensions": {
    "title": "Comprehensions",
    "tag": "Data Structures",
    "entries": [
      {
        "title": "List, Dict, and Set Comprehensions",
        "tag": "",
        "desc": "Compact, expressive, and idiomatic syntax for building new collections from iterables."
      },
      {
        "title": "Generator Expressions",
        "tag": "",
        "desc": "Parenthesized syntax <code>(...)</code>. Computes elements lazily on demand without allocating memory for the whole collection.",
        "note": "If you only need to iterate over data once or calculate a sum/min/max, always use generator expressions instead of list comprehensions to save memory."
      }
    ]
  },
  "decorators": {
    "title": "Decorators",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Function Decorators and @functools.wraps",
        "tag": "ADVANCED",
        "desc": "Wraps a function to add logging, caching, authentication, or timing without modifying its body.",
        "note": "When stacking multiple decorators: <code>@dec1</code> then <code>@dec2</code> executes as <code>dec1(dec2(func))</code> — bottom-up at definition time, top-down at invocation!"
      },
      {
        "title": "Decorator with Arguments (Decorator Factory)",
        "tag": "",
        "desc": "A three-tier function pattern: the outer function takes arguments and returns the decorator."
      }
    ]
  },
  "context_managers": {
    "title": "Context Managers",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Context Managers: with, __enter__, __exit__",
        "tag": "",
        "desc": "Guaranteed resource cleanup (files, locks, DB transactions) even if an exception occurs."
      }
    ]
  },
  "exceptions": {
    "title": "Exceptions (Exceptions)",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Exception Handling (try / except / else / finally)",
        "tag": "",
        "desc": "Robust error handling, custom exception hierarchies, and exception chaining with <code>from</code>."
      }
    ]
  },
  "files": {
    "title": "Files & Data Formats",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Modern File System Operations: pathlib",
        "tag": "",
        "desc": "Object-oriented path manipulation (Python 3.4+). Fully replaces legacy <code>os.path</code>."
      },
      {
        "title": "Working with Data Formats: JSON, CSV, SQLite",
        "tag": "",
        "desc": "Serialization, reading, and writing structured data using Python's standard library."
      }
    ]
  },
  "oop": {
    "title": "OOP & Classes",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Classes, Properties (@property) & Inheritance",
        "tag": "",
        "desc": "Encapsulation, inheritance, getters, setters, and method resolution order."
      },
      {
        "title": "Dataclasses (@dataclass) and __slots__ Optimization",
        "tag": "PRO",
        "desc": "Generates <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> automatically. <code>__slots__</code> removes <code>__dict__</code> to save RAM."
      },
      {
        "title": "Magic (Dunder) Methods Cheat Sheet",
        "tag": "",
        "desc": "Special double-underscore methods that integrate classes with Python syntax operators."
      }
    ]
  },
  "typing_pro": {
    "title": "Advanced Type Hints",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Type Annotations: Modern Syntax (Python 3.10+)",
        "tag": "PYTHON 3.10+",
        "desc": "Type hints verified by static analyzers (Mypy, Pyright, IDEs). Use pipe <code>|</code> instead of Union/Optional."
      }
    ]
  },
  "asyncio_concurrency": {
    "title": "Async & Concurrency",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Asynchronous Programming: asyncio",
        "tag": "MODERN",
        "desc": "Non-blocking single-threaded I/O event loop for high-throughput networking and web services."
      },
      {
        "title": "Comparison: Asyncio vs Threading vs Multiprocessing",
        "tag": "",
        "desc": "Choosing the right concurrency model: I/O bound vs CPU bound workloads."
      }
    ]
  },
  "generators": {
    "title": "Generators & Itertools",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Generators (yield) and Delegation (yield from)",
        "tag": "",
        "desc": "Functions that preserve execution state across calls, yielding values one by one."
      },
      {
        "title": "itertools Module (Python's Hidden Gem)",
        "tag": "",
        "desc": "High-performance memory-efficient iterator combinators implemented in C."
      }
    ]
  },
  "builtins": {
    "title": "Built-in Functions",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Essential Built-in Functions",
        "tag": "",
        "desc": "Key built-in functions every Python developer should master for clean and idiomatic code."
      }
    ]
  },
  "modules": {
    "title": "Standard Library",
    "tag": "Advanced Python",
    "entries": [
      {
        "title": "Standard Modules: datetime, random, secrets, subprocess",
        "tag": "",
        "desc": "Batteries included: secure tokens, system process execution, timestamps, and formatting."
      }
    ]
  },
  "frameworks_fastapi": {
    "title": "FastAPI — Web API",
    "tag": "Frameworks & Web",
    "entries": [
      {
        "title": "FastAPI Quickstart (REST API)",
        "tag": "TOP WEB",
        "desc": "High-performance async web framework built on Pydantic and Starlette with automatic OpenAPI docs."
      },
      {
        "title": "Dependency Injection (Depends)",
        "tag": "",
        "desc": "Key architectural feature of FastAPI for reusing DB sessions, auth checks, and request parsing."
      }
    ]
  },
  "frameworks_flask": {
    "title": "Flask — Web Microframework",
    "tag": "Frameworks & Web",
    "entries": [
      {
        "title": "Flask Microframework: Routes, JSON & Jinja2",
        "tag": "",
        "desc": "Classic lightweight WSGI framework for rapid prototyping and microservices."
      },
      {
        "title": "Modular Architecture with Flask Blueprints",
        "tag": "",
        "desc": "Splitting a growing application into decoupled, reusable modules with URL prefixes."
      }
    ]
  },
  "frameworks_django": {
    "title": "Django — Web Framework",
    "tag": "Frameworks & Web",
    "entries": [
      {
        "title": "Full-Featured Django Framework",
        "tag": "FULL-STACK",
        "desc": "Batteries-included philosophy: built-in admin panel, ORM, migrations, authentication, and CSRF protection."
      },
      {
        "title": "Django ORM: Query Cheat Sheet",
        "tag": "ORM",
        "desc": "Quick examples of selection, filtering, aggregation, and performance optimization via select_related."
      }
    ]
  },
  "frameworks_http": {
    "title": "HTTP Clients: Requests & HTTPX",
    "tag": "Frameworks & Web",
    "entries": [
      {
        "title": "HTTP Requests: Requests & Modern Async HTTPX",
        "tag": "",
        "desc": "Sending GET and POST requests, JSON payload handling, authentication, and HTTP/2 support."
      }
    ]
  },
  "frameworks_sql": {
    "title": "SQLAlchemy 2.0 — Databases",
    "tag": "Databases & Data",
    "entries": [
      {
        "title": "SQLAlchemy 2.0: Modern Database ORM",
        "tag": "SQL 2.0",
        "desc": "Modern type-safe 2.0 syntax using Mapped, mapped_column, and explicit select() statements."
      }
    ]
  },
  "data_science": {
    "title": "NumPy & Pandas — Data Science",
    "tag": "Databases & Data",
    "entries": [
      {
        "title": "NumPy: Fast Arrays & Vectorization",
        "tag": "",
        "desc": "Foundation of scientific computing and machine learning. C-level arrays 50-100x faster than Python lists."
      },
      {
        "title": "Pandas: DataFrames, Filtering & Aggregations",
        "tag": "",
        "desc": "Tabular data manipulation, CSV/Excel processing, boolean masking, and SQL-like grouping."
      }
    ]
  },
  "frameworks_testing": {
    "title": "Testing (Pytest)",
    "tag": "Testing & DevOps",
    "entries": [
      {
        "title": "Testing with Pytest: Fixtures & Parametrization",
        "tag": "TESTING",
        "desc": "De-facto standard testing framework in Python. Run tests simply with <code>pytest</code> in terminal."
      }
    ]
  },
  "devops_tooling": {
    "title": "DevOps Tools & Environments (uv, pip, venv)",
    "tag": "Testing & DevOps",
    "entries": [
      {
        "title": "Virtual Environments & Ultra-Fast 'uv' Package Manager",
        "tag": "UV / VENV",
        "desc": "Dependency isolation and the blazingly fast Rust-powered package manager <code>uv</code>."
      },
      {
        "title": "Linting & Formatting (Ruff, Mypy)",
        "tag": "",
        "desc": "Modern Python code quality standards: Ruff replaces Flake8, Black, and isort with 100x speed."
      }
    ]
  },
  "debugging_perf": {
    "title": "Debugging & Performance",
    "tag": "Testing & DevOps",
    "entries": [
      {
        "title": "Debugger breakpoint() (pdb) & logging Module",
        "tag": "",
        "desc": "Python built-in interactive debugger and structured logging to replace ad-hoc print calls."
      },
      {
        "title": "Benchmarking: timeit & sys.getsizeof",
        "tag": "",
        "desc": "Measuring code execution time accurately and inspecting memory consumption of objects."
      }
    ]
  },
  "best_practices": {
    "title": "Patterns & Security",
    "tag": "Testing & DevOps",
    "entries": [
      {
        "title": "Pythonic Idioms: EAFP vs LBYL",
        "tag": "IDIOMS",
        "desc": "Python design philosophy: 'Easier to Ask for Forgiveness than Permission' produces faster, safer code."
      },
      {
        "title": "Security: 5 Rules for Every Python Developer",
        "tag": "SECURITY",
        "desc": "Top web and application vulnerabilities and how to prevent them in Python."
      }
    ]
  }
}
  },
  tables: {
  "types": {
    "ru": "<tr><th>Тип</th><th>Пример</th><th>Изменяемый?</th><th>Описание</th></tr>\n  <tr><td>int</td><td><code>x = 42</code></td><td>Нет</td><td>Целое число неограниченной точности</td></tr>\n  <tr><td>float</td><td><code>x = 3.14159</code></td><td>Нет</td><td>Число с плавающей точкой (IEEE 754)</td></tr>\n  <tr><td>complex</td><td><code>x = 2 + 3j</code></td><td>Нет</td><td>Комплексное число (действ. + мнимая часть)</td></tr>\n  <tr><td>bool</td><td><code>x = True</code></td><td>Нет</td><td>Булево значение (подкласс int: True==1, False==0)</td></tr>\n  <tr><td>str</td><td><code>x = \"Привет\"</code></td><td>Нет</td><td>Строка символов в кодировке Unicode (UTF-8)</td></tr>\n  <tr><td>bytes</td><td><code>b = b\"hello\"</code></td><td>Нет</td><td>Неизменяемая последовательность байт</td></tr>\n  <tr><td>NoneType</td><td><code>x = None</code></td><td>Нет</td><td>Синглтон, обозначающий отсутствие значения</td></tr>\n  <tr><td>list</td><td><code>x = [1, 2, \"a\"]</code></td><td>Да</td><td>Динамический изменяемый массив</td></tr>\n  <tr><td>tuple</td><td><code>x = (1, 2, \"a\")</code></td><td>Нет</td><td>Неизменяемый кортеж значений</td></tr>\n  <tr><td>dict</td><td><code>x = {\"k\": \"v\"}</code></td><td>Да</td><td>Хэш-таблица ключ-значение (сохраняет порядок с 3.7)</td></tr>\n  <tr><td>set</td><td><code>x = {1, 2, 3}</code></td><td>Да</td><td>Хэш-множество уникальных элементов O(1) поиск</td></tr>\n  <tr><td>frozenset</td><td><code>x = frozenset([1,2])</code></td><td>Нет</td><td>Неизменяемое множество (можно класть в dict/set)</td></tr>",
    "en": "<tr><th>Type</th><th>Example</th><th>Mutable?</th><th>Description</th></tr>\n  <tr><td>int</td><td><code>x = 42</code></td><td>No</td><td>Arbitrary-precision integer</td></tr>\n  <tr><td>float</td><td><code>x = 3.14159</code></td><td>No</td><td>Double precision floating point number (IEEE 754)</td></tr>\n  <tr><td>complex</td><td><code>x = 2 + 3j</code></td><td>No</td><td>Complex number (real + imaginary parts)</td></tr>\n  <tr><td>bool</td><td><code>x = True</code></td><td>No</td><td>Boolean value (subclass of int: True==1, False==0)</td></tr>\n  <tr><td>str</td><td><code>x = \"Hello\"</code></td><td>No</td><td>Unicode character sequence (UTF-8)</td></tr>\n  <tr><td>bytes</td><td><code>b = b\"hello\"</code></td><td>No</td><td>Immutable byte sequence</td></tr>\n  <tr><td>NoneType</td><td><code>x = None</code></td><td>No</td><td>Singleton denoting the absence of a value</td></tr>\n  <tr><td>list</td><td><code>x = [1, 2, \"a\"]</code></td><td>Yes</td><td>Dynamic mutable array of references</td></tr>\n  <tr><td>tuple</td><td><code>x = (1, 2, \"a\")</code></td><td>No</td><td>Immutable sequence of items</td></tr>\n  <tr><td>dict</td><td><code>x = {\"k\": \"v\"}</code></td><td>Yes</td><td>Hash map key-value store (preserves order since 3.7)</td></tr>\n  <tr><td>set</td><td><code>x = {1, 2, 3}</code></td><td>Yes</td><td>Hash set of unique elements, O(1) membership lookup</td></tr>\n  <tr><td>frozenset</td><td><code>x = frozenset([1,2])</code></td><td>No</td><td>Immutable set (hashable, valid in dict/set)</td></tr>"
  },
  "strings": {
    "ru": "<tr><th>Метод</th><th>Описание</th><th>Пример</th></tr>\n  <tr><td><code>.split(sep, maxsplit)</code></td><td>Разбить строку в список</td><td><code>\"a b c\".split()</code> &rarr; <code>['a','b','c']</code></td></tr>\n  <tr><td><code>.join(iterable)</code></td><td>Склеить список строк через разделитель</td><td><code>\"-\".join(['a','b'])</code> &rarr; <code>\"a-b\"</code></td></tr>\n  <tr><td><code>.replace(old, new, count)</code></td><td>Замена подстроки</td><td><code>\"1-2-3\".replace(\"-\",\":\",1)</code> &rarr; <code>\"1:2-3\"</code></td></tr>\n  <tr><td><code>.strip([chars])</code></td><td>Очистить символы по краям</td><td><code>\" xx \".strip()</code> &rarr; <code>\"xx\"</code></td></tr>\n  <tr><td><code>.partition(sep)</code></td><td>Разбивает на (до, sep, после)</td><td><code>\"user@host\".partition(\"@\")</code> &rarr; <code>('user','@','host')</code></td></tr>\n  <tr><td><code>.removeprefix(p)</code></td><td>Удалить префикс (3.9+)</td><td><code>\"v1.2\".removeprefix(\"v\")</code> &rarr; <code>\"1.2\"</code></td></tr>",
    "en": "<tr><th>Method</th><th>Description</th><th>Example</th></tr>\n  <tr><td><code>.split(sep, maxsplit)</code></td><td>Split string into a list</td><td><code>\"a b c\".split()</code> &rarr; <code>['a','b','c']</code></td></tr>\n  <tr><td><code>.join(iterable)</code></td><td>Join iterable of strings with separator</td><td><code>\"-\".join(['a','b'])</code> &rarr; <code>\"a-b\"</code></td></tr>\n  <tr><td><code>.replace(old, new, count)</code></td><td>Substring replacement</td><td><code>\"1-2-3\".replace(\"-\",\":\",1)</code> &rarr; <code>\"1:2-3\"</code></td></tr>\n  <tr><td><code>.strip([chars])</code></td><td>Strip whitespace or characters from ends</td><td><code>\" xx \".strip()</code> &rarr; <code>\"xx\"</code></td></tr>\n  <tr><td><code>.partition(sep)</code></td><td>Split into 3-tuple (before, sep, after)</td><td><code>\"user@host\".partition(\"@\")</code> &rarr; <code>('user','@','host')</code></td></tr>\n  <tr><td><code>.removeprefix(p)</code></td><td>Remove prefix (Python 3.9+)</td><td><code>\"v1.2\".removeprefix(\"v\")</code> &rarr; <code>\"1.2\"</code></td></tr>"
  },
  "lists": {
    "ru": "<tr><th>Операция</th><th>Сложность по времени</th><th>Описание</th></tr>\n  <tr><td><code>lst[i]</code> / <code>lst[i] = x</code></td><td>O(1)</td><td>Доступ / замена по индексу</td></tr>\n  <tr><td><code>lst.append(x)</code></td><td>O(1) амортизированно</td><td>Добавление в конец</td></tr>\n  <tr><td><code>lst.pop()</code></td><td>O(1)</td><td>Удаление с конца</td></tr>\n  <tr><td><code>lst.pop(0)</code> / <code>lst.insert(0, x)</code></td><td>O(n)</td><td>Удаление/вставка в начало (медленно! Используйте collections.deque)</td></tr>\n  <tr><td><code>x in lst</code></td><td>O(n)</td><td>Линейный поиск элемента</td></tr>\n  <tr><td><code>lst.sort()</code></td><td>O(n log n)</td><td>Алгоритм Timsort (стабильная сортировка)</td></tr>",
    "en": "<tr><th>Operation</th><th>Time Complexity</th><th>Description</th></tr>\n  <tr><td><code>lst[i]</code> / <code>lst[i] = x</code></td><td>O(1)</td><td>Index access / assignment</td></tr>\n  <tr><td><code>lst.append(x)</code></td><td>O(1) amortized</td><td>Append item to end of list</td></tr>\n  <tr><td><code>lst.pop()</code></td><td>O(1)</td><td>Remove and return last element</td></tr>\n  <tr><td><code>lst.pop(0)</code> / <code>lst.insert(0, x)</code></td><td>O(n)</td><td>Remove/insert at beginning (slow! Use collections.deque)</td></tr>\n  <tr><td><code>x in lst</code></td><td>O(n)</td><td>Linear membership search</td></tr>\n  <tr><td><code>lst.sort()</code></td><td>O(n log n)</td><td>Timsort algorithm (stable in-place sort)</td></tr>"
  },
  "exceptions": {
    "ru": "<tr><th>Исключение</th><th>Причина</th></tr>\n  <tr><td><code>ValueError</code></td><td>Неверное значение аргумента при корректном типе (например, <code>int(\"abc\")</code>)</td></tr>\n  <tr><td><code>TypeError</code></td><td>Несовместимый тип данных (например, <code>\"2\" + 2</code>)</td></tr>\n  <tr><td><code>KeyError</code> / <code>IndexError</code></td><td>Ключ не найден в словаре / индекс вышел за пределы списка</td></tr>\n  <tr><td><code>AttributeError</code></td><td>У объекта нет запрашиваемого атрибута или метода</td></tr>\n  <tr><td><code>StopIteration</code></td><td>Итератор завершил обход и больше не содержит элементов</td></tr>",
    "en": "<tr><th>Exception</th><th>Common Cause</th></tr>\n  <tr><td><code>ValueError</code></td><td>Invalid argument value with valid data type (e.g. <code>int(\"abc\")</code>)</td></tr>\n  <tr><td><code>TypeError</code></td><td>Incompatible data type operation (e.g. <code>\"2\" + 2</code>)</td></tr>\n  <tr><td><code>KeyError</code> / <code>IndexError</code></td><td>Key missing in dict / index out of range in sequence</td></tr>\n  <tr><td><code>AttributeError</code></td><td>Object lacks requested attribute or method</td></tr>\n  <tr><td><code>StopIteration</code></td><td>Iterator has no further items to yield</td></tr>"
  },
  "oop": {
    "ru": "<tr><th>Метод</th><th>Срабатывает при...</th><th>Назначение</th></tr>\n  <tr><td><code>__str__(self)</code></td><td><code>str(obj)</code>, <code>print(obj)</code></td><td>Человекочитаемое строковое представление</td></tr>\n  <tr><td><code>__repr__(self)</code></td><td>Вывод в консоли REPL, логирование</td><td>Однозначное представление для программиста</td></tr>\n  <tr><td><code>__len__(self)</code></td><td><code>len(obj)</code></td><td>Длина коллекции</td></tr>\n  <tr><td><code>__getitem__(self, key)</code></td><td><code>obj[key]</code></td><td>Доступ по индексу или ключу словаря</td></tr>\n  <tr><td><code>__eq__(self, other)</code></td><td><code>obj == other</code></td><td>Сравнение на равенство</td></tr>\n  <tr><td><code>__lt__(self, other)</code></td><td><code>obj &lt; other</code></td><td>Сравнение 'меньше' (позволяет <code>sorted()</code>)</td></tr>\n  <tr><td><code>__call__(self, *args)</code></td><td><code>obj()</code></td><td>Позволяет вызывать объект как функцию</td></tr>\n  <tr><td><code>__hash__(self)</code></td><td><code>hash(obj)</code></td><td>Позволяет объекту быть ключом dict или элементом set</td></tr>",
    "en": "<tr><th>Method</th><th>Triggered on...</th><th>Purpose</th></tr>\n  <tr><td><code>__str__(self)</code></td><td><code>str(obj)</code>, <code>print(obj)</code></td><td>Human-readable string representation</td></tr>\n  <tr><td><code>__repr__(self)</code></td><td>REPL console output, logging</td><td>Unambiguous developer/debug representation</td></tr>\n  <tr><td><code>__len__(self)</code></td><td><code>len(obj)</code></td><td>Length of collection</td></tr>\n  <tr><td><code>__getitem__(self, key)</code></td><td><code>obj[key]</code></td><td>Index or dictionary key access</td></tr>\n  <tr><td><code>__eq__(self, other)</code></td><td><code>obj == other</code></td><td>Equality comparison</td></tr>\n  <tr><td><code>__lt__(self, other)</code></td><td><code>obj &lt; other</code></td><td>Less-than comparison (enables <code>sorted()</code>)</td></tr>\n  <tr><td><code>__call__(self, *args)</code></td><td><code>obj()</code></td><td>Makes instance callable like a function</td></tr>\n  <tr><td><code>__hash__(self)</code></td><td><code>hash(obj)</code></td><td>Allows object to be a dict key or set element</td></tr>"
  },
  "asyncio_concurrency": {
    "ru": "<tr><th>Модель</th><th>Модуль</th><th>Для чего идеально подходит?</th><th>GIL блокирует?</th></tr>\n  <tr><td>Asyncio</td><td><code>asyncio</code></td><td>Высоконагруженный сетевой I/O (FastAPI, микросервисы, веб-краулинг 10 000+ сокетов)</td><td>Один поток (Event Loop)</td></tr>\n  <tr><td>Threading</td><td><code>threading</code></td><td>Блокирующие I/O операции в легаси коде, GUI интерфейсы</td><td>Да (только 1 поток выполняет Python байт-код)</td></tr>\n  <tr><td>Multiprocessing</td><td><code>multiprocessing</code></td><td>Тяжелые CPU вычисления: математика, сжатие, ML инференс, парсинг больших файлов</td><td>Нет (каждый процесс имеет собственный Python и память)</td></tr>",
    "en": "<tr><th>Model</th><th>Module</th><th>Ideal Use Case</th><th>GIL Impact</th></tr>\n  <tr><td>Asyncio</td><td><code>asyncio</code></td><td>High-throughput network I/O (FastAPI, microservices, 10,000+ open sockets)</td><td>Single thread (Event Loop)</td></tr>\n  <tr><td>Threading</td><td><code>threading</code></td><td>Blocking I/O in legacy libraries, desktop GUI responsiveness</td><td>Yes (only 1 thread executes Python bytecode at a time)</td></tr>\n  <tr><td>Multiprocessing</td><td><code>multiprocessing</code></td><td>Heavy CPU computations: math, compression, ML inference, parsing</td><td>No (each process runs its own Python runtime and RAM)</td></tr>"
  },
  "builtins": {
    "ru": "<tr><th>Функция</th><th>Описание</th></tr>\n  <tr><td><code>zip(*iterables)</code></td><td>Параллельное объединение кортежей по элементам</td></tr>\n  <tr><td><code>enumerate(iterable, start=0)</code></td><td>Возвращает пары (индекс, элемент)</td></tr>\n  <tr><td><code>sorted(iterable, key=None, reverse=False)</code></td><td>Возвращает новый отсортированный список</td></tr>\n  <tr><td><code>divmod(a, b)</code></td><td>Возвращает кортеж (частное a // b, остаток a % b)</td></tr>\n  <tr><td><code>isinstance(obj, class_or_tuple)</code></td><td>Проверяет принадлежность объекта к классу или его наследникам</td></tr>",
    "en": "<tr><th>Function</th><th>Description</th></tr>\n  <tr><td><code>zip(*iterables)</code></td><td>Parallel iteration yielding element-wise tuples</td></tr>\n  <tr><td><code>enumerate(iterable, start=0)</code></td><td>Yields index-element pairs (index, value)</td></tr>\n  <tr><td><code>sorted(iterable, key=None, reverse=False)</code></td><td>Returns a new sorted list from iterable</td></tr>\n  <tr><td><code>divmod(a, b)</code></td><td>Returns tuple of quotient and remainder (a // b, a % b)</td></tr>\n  <tr><td><code>isinstance(obj, class_or_tuple)</code></td><td>Checks if object is an instance of class or subclass</td></tr>"
  },
  "debugging_perf": {
    "ru": "<tr><th>Команда pdb</th><th>Что делает</th></tr>\n  <tr><td><code>n</code> (next)</td><td>Выполнить текущую строку и перейти к следующей</td></tr>\n  <tr><td><code>s</code> (step)</td><td>Шагнуть внутрь вызываемой функции</td></tr>\n  <tr><td><code>c</code> (continue)</td><td>Продолжить нормальное выполнение до следующего breakpoint</td></tr>\n  <tr><td><code>p var</code></td><td>Распечатать значение переменной <code>var</code></td></tr>\n  <tr><td><code>l</code> (list)</td><td>Показать 11 строк исходного кода вокруг текущей позиции</td></tr>\n  <tr><td><code>q</code> (quit)</td><td>Выйти из отладчика и прервать программу</td></tr>",
    "en": "<tr><th>pdb Command</th><th>Action</th></tr>\n  <tr><td><code>n</code> (next)</td><td>Execute current line and pause at next line</td></tr>\n  <tr><td><code>s</code> (step)</td><td>Step into called function</td></tr>\n  <tr><td><code>c</code> (continue)</td><td>Resume execution until next breakpoint</td></tr>\n  <tr><td><code>p var</code></td><td>Print the value of variable <code>var</code></td></tr>\n  <tr><td><code>l</code> (list)</td><td>Display 11 lines of source code surrounding current line</td></tr>\n  <tr><td><code>q</code> (quit)</td><td>Exit debugger and abort program execution</td></tr>"
  }
},
  comments: {
    ruToEn: {
  "'     право'": "'     right'",
  "'  центр   '": "'  center  '",
  "'!' — последний символ": "'!' - last character",
  "'!dlroW ,olleH' (реверс строки в один миг!)": "'!dlroW ,olleH' (instant string reversal!)",
  "'.csv' (расширение)": "'.csv' (file extension)",
  "'00042' (дополнение нулями)": "'00042' (zero-padded)",
  "'1,250,000.75' (разделитель тысяч)": "'1,250,000.75' (thousands separator)",
  "'1_250_000.75' (разделитель _)": "'1_250_000.75' (underscore separator)",
  "'2026' (имя без расширения)": "'2026' (stem / file name without extension)",
  "'2026.csv' (имя с расширением)": "'2026.csv' (file name with extension)",
  "'H' — первый символ": "'H' - first character",
  "'Hello' (с 0 по 4 индекс)": "'Hello' (from index 0 to 4)",
  "'Hello' (с начала до 5)": "'Hello' (from start up to index 5)",
  "'Hlo ol!' (каждый 2-й символ)": "'Hlo ol!' (every 2nd character)",
  "'World!' (с 7 до самого конца)": "'World!' (from index 7 to the very end)",
  "'ello, World' (срез без первого и последнего символа)": "'ello, World' (slice without first and last char)",
  "'ss' (мощнее lower() для интернационализации)": "'ss' (more powerful than lower() for i18n)",
  "'лево      '": "'left      '",
  "'тест' (удаляет пробелы и переводы строк)": "'test' (strips whitespace and newlines)",
  "(connect_timeout, read_timeout) — ВСЕГДА задавайте timeout!": "(connect_timeout, read_timeout) — ALWAYS specify timeouts!",
  "* отделяет ключевые-только параметры (ОБЯЗАТЕЛЬНО передавать name=val)": "* separates keyword-only parameters (MUST pass name=val)",
  "-4 ! (важно: Python округляет к минус бесконечности)": "-4 ! (important: Python rounds towards negative infinity)",
  "-6 (побитовое НЕ / NOT: -(x + 1))": "-6 (bitwise NOT: -(x + 1))",
  ".iloc[строки, колонки] — по числовым индексам (0..n)": ".iloc[rows, cols] — integer position-based (0..n)",
  ".loc[строки, колонки] — по именам / меткам": ".loc[rows, cols] — label-based indexing",
  "/ отделяет позиционно-только параметры (нельзя передать name=val)": "/ separates positional-only parameters (cannot pass name=val)",
  "1 (остаток от деления)": "1 (modulo / remainder)",
  "1 (побитовое И / AND)": "1 (bitwise AND)",
  "1. LBYL (Look Before You Leap) — стиль C++/Java с избыточными проверками:": "1. LBYL (Look Before You Leap) — C++/Java style with redundant checks:",
  "1. List comprehension: [выражение for x in iter if условие]": "1. List comprehension: [expr for x in iter if condition]",
  "1. Literal — только строго определенные значения": "1. Literal — strictly restricted literal values",
  "1. Pydantic схема валидации тела запроса (Request Body)": "1. Pydantic request body validation schema",
  "1. breakpoint() — останавливает выполнение и переходит в интерактивный отладчик": "1. breakpoint() — pauses execution and launches the interactive debugger",
  "1. chain — склеить несколько генераторов/списков без создания нового списка": "1. chain — concatenate iterables without constructing an intermediate list",
  "1. defaultdict — автоматически инициализирует ключ при первом обращении": "1. defaultdict — automatically initializes missing keys on first access",
  "1. enumerate — индекс и значение": "1. enumerate — index and value tracking",
  "1. Базовый декларативный класс": "1. Base declarative class",
  "1. Модель данных в blog/models.py": "1. Data model in blog/models.py",
  "1. НИКОГДА не используйте eval() или exec() на строках от пользователей": "1. NEVER use eval() or exec() on untrusted user strings",
  "1. Отладка переменной (Python 3.8+)": "1. Variable self-debugging (Python 3.8+)",
  "1. Простой маршрут": "1. Simple route",
  "1. Простой тест через обычный assert (понятные сообщения об ошибках)": "1. Simple test using standard assert (clear failure diagnostics)",
  "1. Синхронный Requests: pip install requests": "1. Synchronous Requests: pip install requests",
  "1. Создание через класс": "1. Class-based context manager",
  "1. Стандартный Python venv:": "1. Standard Python venv:",
  "1. Чтение и сохранение:": "1. Reading and saving:",
  "10 (из двоичной системы)": "10 (parsed from binary base 2)",
  "10 20 (и по индексу тоже работает)": "10 20 (index access works too)",
  "10 20 (обращение по имени!)": "10 20 (attribute name access!)",
  "16 (побитовый сдвиг влево: умножение на 2^4)": "16 (bitwise left shift: multiply by 2^4)",
  "2 (индекс первого совпадения, -1 если нет)": "2 (first index match, -1 if absent)",
  "2. Callable — сигнатура функции: Callable[[ArgTypes], ReturnType]": "2. Callable — function signature: Callable[[ArgTypes], ReturnType]",
  "2. Counter — быстрый подсчет частоты элементов": "2. Counter — rapid frequency counting",
  "2. EAFP (Easier to Ask for Forgiveness than Permission) — ИДИОМАТИЧНЫЙ PYTHON:": "2. EAFP (Easier to Ask for Forgiveness than Permission) — IDIOMATIC PYTHON:",
  "2. GET эндпоинт с Path и Query параметрами": "2. GET endpoint with Path and Query parameters",
  "2. JSON API с методами GET и POST": "2. JSON API endpoint supporting GET and POST",
  "2. islice — срез генератора [start, stop, step]": "2. islice — slice infinite/generator iterables [start, stop, step]",
  "2. random vs secrets (безопасность!)": "2. random vs secrets (cryptographic security!)",
  "2. zip — параллельная итерация по двум и более коллекциям": "2. zip — parallel iteration over multiple collections",
  "2. Быстрое создание через генератор @contextlib.contextmanager": "2. Rapid creation via @contextlib.contextmanager",
  "2. Выборка и фильтрация строк:": "2. Row selection and boolean filtering:",
  "2. Избегайте SQL Injection: ВСЕГДА используйте параметры (?, %s, :param)": "2. Avoid SQL Injection: ALWAYS use query parameters (?, %s, :param)",
  "2. Логирование вместо print:": "2. Structured logging instead of print:",
  "2. Модель пользователя": "2. User model",
  "2. Округление и точность float": "2. Floating-point rounding and precision",
  "2. Современный асинхронный HTTPX: pip install httpx": "2. Modern async HTTPX: pip install httpx",
  "2. Тестирование исключений": "2. Testing exceptions with pytest.raises",
  "2. Управление зависимостями:": "2. Dependency management:",
  "256 (возведение в степень)": "256 (exponentiation / power)",
  "3 (целочисленное деление, округление вниз к -inf)": "3 (floor division, rounds towards -inf)",
  "3. POST эндпоинт с автовалидацией Pydantic": "3. POST endpoint with automatic Pydantic validation",
  "3. Безопасная десериализация: pickle ОПАСЕН для непроверенных данных!": "3. Safe deserialization: pickle is UNSAFE for untrusted payloads!",
  "3. Генерация токенов и паролей (secrets):": "3. Cryptographically secure tokens (secrets):",
  "3. Группировка и агрегация (аналог SQL GROUP BY):": "3. Grouping and aggregation (SQL GROUP BY equivalent):",
  "3. Декоратор для замера времени выполнения": "3. Execution timer decorator",
  "3. Запуск системных команд (subprocess):": "3. Running system commands (subprocess):",
  "3. Параметризованные тесты (один тест — много входных данных)": "3. Parametrized tests (one test, multiple data sets)",
  "3. Работа с датой и временем (datetime):": "3. Working with dates and times (datetime):",
  "3. Создание таблиц и сессия": "3. Table creation and DB session",
  "3. product — Декартово произведение (замена вложенным циклам)": "3. product — Cartesian product (replaces nested loops)",
  "3.0 (обычное деление всегда дает float)": "3.0 (regular division always produces a float)",
  "4 (побитовый сдвиг вправо: деление на 2^2)": "4 (bitwise right shift: divide by 2^2)",
  "4. Dict comprehension: {ключ: знач for x in iter}": "4. Dict comprehension: {key: val for x in iter}",
  "4. Fast & Modern: 'uv' (написан на Rust, в 10-100 раз быстрее pip!)": "4. Fast & Modern: 'uv' (written in Rust, 10-100x faster than pip!)",
  "4. Fixtures (Фикстуры) для подготовки тестовых данных": "4. Fixtures for test data setup and teardown",
  "4. Никогда не хардкодьте токены и пароли в коде!": "4. Never hardcode API keys, secrets, or passwords in code!",
  "4. Шаблоны Jinja2 (render_template)": "4. Jinja2 templates (render_template)",
  "42 (строка в целое)": "42 (string to int)",
  "5. Set comprehension: {выражение for x in iter}": "5. Set comprehension: {expr for x in iter}",
  "5. Хэширование паролей: используйте bcrypt / argon2 (НЕ md5 и НЕ sha256!)": "5. Password hashing: use bcrypt / argon2 (NEVER md5 or raw sha256!)",
  "6 (побитовое XOR)": "6 (bitwise XOR)",
  "7 (побитовое ИЛИ / OR)": "7 (bitwise OR)",
  "8. Именованные f-строки и выравнивание": "8. Named expressions and column alignment",
  "False (0, 0.0, '', [], {}, set(), None — все False!)": "False (0, 0.0, '', [], {}, set(), None are all False!)",
  "False (проверяет все!)": "False (verifies all items are truthy!)",
  "False (пустой словарь)": "False (empty dict)",
  "JSON тело ответа": "JSON response body",
  "JSON парсится автоматически в dict / list": "JSON automatically parsed into dict / list",
  "ORM запрос: выборка, фильтрация и сортировка": "ORM query: select, filter, and order by",
  "True (строка с пробелом не пустая)": "True (whitespace string is truthy)",
  "True (хотя бы один True)": "True (at least one item is truthy)",
  "True — рекомендуется (учитывает наследование)": "True — recommended (respects inheritance)",
  "['Hello', 'World', 'Python']": "['Hello', 'World', 'Python']",
  "['a', 'b', 'c']": "['a', 'b', 'c']",
  "['p', 'y', 't', 'h', 'o', 'n']": "['p', 'y', 't', 'h', 'o', 'n']",
  "[1, 2, 3, 4] — список 'a' тоже изменился!": "[1, 2, 3, 4] — original list 'a' changed too!",
  "[1, 4, 9, 16] (генератор вычисляет значения на лету!)": "[1, 4, 9, 16] (generator computes values on the fly!)",
  "[2, 3, 4, 5] (результат)": "[2, 3, 4, 5] (mapped output)",
  "[2, 4] (только четные)": "[2, 4] (filtered even numbers)",
  "[4, 16] (только четные возведены в квадрат)": "[4, 16] (only evens squared)",
  "\\n - перевод строки": "\\n - newline",
  "\\t - табуляция": "\\t - tab",
  "a и b ссылаются на разные объекты!": "a and b point to independent objects!",
  "args = (3, 4), kwargs = {'x': 10, 'y': 20}": "args = (3, 4), kwargs = {'x': 10, 'y': 20}",
  "break прервал поиск — else НЕ выполнится!": "break interrupted search — else does NOT execute!",
  "c['apple'] = 3, c['banana'] = 2": "c['apple'] = 3, c['banana'] = 2",
  "b ссылается на ТОТ ЖЕ список!": "b references the EXACT SAME list!",
  "Выведет: Поймали кастомную ошибку: Недостаточно средств, код 402": "Output: Caught custom error: Insufficient funds, code 402",
  "Выведет: Работаем с файлом...": "Output: Working with file...",
  "Выведет: Файл закрыт! Ресурсы освобождены.": "Output: File closed! Resources released.",
  "Выведет: Финализация: закрытие соединений...": "Output: Cleanup: closing connections...",
  "Выведет: Функция slow_query выполнялась 0.1023 сек": "Output: Function slow_query took 0.1023s",
  "Вызов асинхронной корутины через await (НЕ блокирует поток!)": "Calling async coroutine with await (non-blocking!)",
  "Вызов конструктора родителя (super)": "Call parent constructor via super()",
  "Вызов функции (без await нельзя!)": "Invoking the function (await is mandatory!)",
  "Выполнить SQL напрямую (Raw SQL)": "Execute raw SQL query directly",
  "Выполняется ВСЕГДА (очистка, закрытие сокетов/файлов)": "ALWAYS runs (cleanup, closing sockets/files)",
  "Выполняется, если ошибок НЕ было": "Runs ONLY if NO exceptions occurred",
  "Выполняем тяжелый подсчет... (вычислится только 1 раз!)": "Computing expensive result... (computed only once!)",
  "Вычисление генератора в цикле for:": "Consuming generator in a for loop:",
  "Вычисляет 2^0, 2^1, ... по требованию:": "Computes 2^0, 2^1, ... on demand:",
  "Генератор завершился": "Generator finished",
  "Генератор не хранит все числа в памяти!": "Generators do not store all items in memory!",
  "Группировка анаграмм:": "Grouping anagrams:",
  "Декораторы функций": "Function decorators",
  "Делегирование вложенному генератору:": "Delegating to sub-generator with yield from:",
  "Десериализация (чтение):": "Deserialization (reading):",
  "Для изменяемых объектов по умолчанию — используйте default_factory:": "For mutable defaults, always use default_factory:",
  "Для неизменяемых типов (числа, строки, tuple) copy() возвращает сам объект": "For immutable types (int, str, tuple), copy() returns self",
  "Для объектов с вложенными структурами используйте deepcopy!": "For deeply nested structures, use copy.deepcopy()!",
  "Добавление новых записей": "Adding new records",
  "Доступ по ключу через скобки: KeyError если нет ключа!": "Key bracket access: raises KeyError if key is missing!",
  "Запуск нескольких задач конкурентно (параллельно)": "Run multiple tasks concurrently via asyncio.gather",
  "Запуск сервера разработки:": "Start development server:",
  "Запуск тестов:": "Run test suite:",
  "Защита от ошибки отсутствия файла": "Protection against missing file error",
  "Иерархия исключений": "Exception hierarchy",
  "Извлечение с удалением (по умолчанию последний)": "Pop and remove (defaults to last element)",
  "Изменение значения по ключу (или добавление нового)": "Update value by key (or insert if absent)",
  "Именованный аргумент (keyword-only) ОБЯЗАТЕЛЕН": "Keyword-only argument is MANDATORY",
  "Индексация и срезы": "Indexing and slicing",
  "Интерпретатор завершит демон без ожидания": "Python interpreter exits without waiting for daemon threads",
  "Использование @dataclass (в 5 раз меньше кода)": "Using @dataclass (5x less boilerplate)",
  "Использование Pathlib:": "Using pathlib:",
  "Использование sessionmaker": "Using sessionmaker",
  "Использование contextlib:": "Using contextlib:",
  "Итерация по ключам и значениям": "Iterating over keys and values",
  "Как сделать независимую копию:": "Creating an independent copy:",
  "Классический класс": "Standard boilerplate class",
  "Конкатенация строк": "String concatenation",
  "Множественное наследование": "Multiple inheritance",
  "Модуль logging": "logging module",
  "Модуль math": "math module",
  "Модуль re (Регулярные выражения)": "re module (Regular expressions)",
  "Найти максимальное значение": "Find maximum value",
  "Наследование от базовой модели": "Inheriting from base model",
  "Неизменяемый словарь (mappingproxy)": "Immutable dictionary view (mappingproxy)",
  "Обработка конкретной ошибки": "Catching specific error",
  "Обработка нескольких ошибок разом": "Catching multiple exceptions in a tuple",
  "Обычная функция": "Regular function",
  "Ограничение параметров: позиционные и именованные": "Restricting parameters: positional-only and keyword-only",
  "Округление до 2 знаков после запятой": "Round to 2 decimal places",
  "Опасный код": "Potentially failing code block",
  "Оператор in проверяет вхождение ключа (быстро O(1))": "in operator checks key presence in O(1)",
  "Определение схемы таблицы": "Table schema definition",
  "Определение типа": "Type checking",
  "Оптимизация __slots__": "__slots__ optimization",
  "Очистить все элементы": "Clear all elements",
  "Параллельные вычисления (multiprocessing)": "Parallel CPU computations (multiprocessing)",
  "Перебор элементов списка": "Iterating through list items",
  "Передача аргументов списком (*args)": "Unpacking argument list (*args)",
  "Передача словарем (**kwargs)": "Unpacking keyword dict (**kwargs)",
  "Переменная останется доступна внутри": "Enclosed variable remains accessible via closure",
  "Пересечение множеств (&)": "Set intersection (&)",
  "Подсчет одинаковых элементов": "Frequency counting identical items",
  "Поиск индекса элемента": "Find element index",
  "Полиморфизм": "Polymorphism",
  "Получение значения по умолчанию через .get() (БЕЗОПАСНО!)": "Safe lookup via .get() with fallback (SAFE!)",
  "Пользовательский класс исключения": "Custom exception class",
  "Поток демон": "Daemon thread",
  "Преобразование типов": "Type casting",
  "Приведение к типу bool": "Casting to bool",
  "Пример 1: чтение потока или строк до условия": "Example 1: read stream/lines until sentinel",
  "Пример 2: проверка длины без повторного вычисления": "Example 2: check length without redundant recalculation",
  "Пример 3: в list comprehension (избегаем двойного вызова тяжелой функции)": "Example 3: in comprehension (avoid duplicate expensive call)",
  "Пример использования": "Usage example",
  "Пример с try / except / else / finally": "Full try / except / else / finally lifecycle",
  "Проверка вхождения": "Membership check",
  "Проверка на пустоту": "Check if empty",
  "Проверка подтипа": "Subclass check",
  "Проверка типа": "Type checking",
  "Простой декоратор": "Basic decorator",
  "Простой генератор": "Simple generator",
  "Простой класс": "Simple class",
  "Работа с CSV:": "Working with CSV:",
  "Работа с JSON:": "Working with JSON:",
  "Работа с SQLite:": "Working with SQLite:",
  "Работа со словарями": "Working with dictionaries",
  "Работа со строками": "Working with strings",
  "Разбиение строки на слова": "Splitting string into words",
  "Разница множеств (-)": "Set difference (-)",
  "Распаковка": "Unpacking",
  "Распаковка словарей": "Dictionary unpacking",
  "Расширение списка другим списком": "Extend list with another list",
  "Рекурсивная функция": "Recursive function",
  "Свойства @property (геттеры и сеттеры)": "Properties with @property (getters & setters)",
  "Связь один-ко-многим (ForeignKey)": "One-to-many relationship (ForeignKey)",
  "Сериализация (запись):": "Serialization (writing):",
  "Симметрическая разность (^)": "Symmetric difference (^)",
  "Синхронный вызов": "Synchronous call",
  "Слияние словарей через распаковку": "Dictionary merging via unpacking",
  "Сложные фильтры (Lookup expressions)": "Complex filters (Lookup expressions)",
  "Собственный класс ошибки с цепочкой (raise ... from ...)": "Custom error class with chaining (raise ... from ...)",
  "Современный вариант с типами (typing.NamedTuple)": "Modern typed variant (typing.NamedTuple)",
  "Современный синтаксис встроенных коллекций (без импорта из typing!)": "Modern built-in collection generics (no typing imports needed!)",
  "Создание DataFrame:": "Creating a DataFrame:",
  "Создание и сохранение": "Create and save instance",
  "Создание кортежа": "Tuple instantiation",
  "Создание одномерных и двумерных массивов:": "Creating 1D and 2D arrays:",
  "Сортировка по ключу (лямбда)": "Sorting with key function (lambda)",
  "Сортировка по убыванию через reverse=True": "Descending sort via reverse=True",
  "Сохранение в файл с кириллицей и отступами:": "Save to file with UTF-8 and formatting:",
  "Сравнение значений и идентичности": "Comparing values vs object identity",
  "Сравнение расхода памяти:": "Memory usage comparison:",
  "Тернарный оператор (однострочный if)": "Ternary operator (one-line if/else)",
  "Точка входа для запуска асинхронного цикла:": "Entrypoint to run the async event loop:",
  "Удаление префиксов и суффиксов (Python 3.9+)": "Removing prefixes and suffixes (Python 3.9+)",
  "Удаление элементов": "Removing elements",
  "Универсальная функция с *args и **kwargs": "Universal function accepting *args and **kwargs",
  "Установка: pip install \"fastapi[standard]\" uvicorn": "Installation: pip install \"fastapi[standard]\" uvicorn",
  "Установка: pip install Flask": "Installation: pip install Flask",
  "Установка: pip install numpy pandas": "Installation: pip install numpy pandas",
  "Установка: pip install pytest": "Installation: pip install pytest",
  "Установка: pip install sqlalchemy": "Installation: pip install sqlalchemy",
  "Фабричный метод (альтернативный конструктор)": "Factory method (alternative class constructor)",
  "Цепочка сравнений (Chained comparisons)": "Chained comparisons",
  "Экономия гигабайт памяти на больших данных:": "Save gigabytes of memory on large datasets:",
  "автоформатирование стиля кода": "auto-formatting code style",
  "безопасный параметризованный запрос!": "safe parameterized query!",
  "вместо Optional[str]": "instead of Optional[str]",
  "вместо Union[int, str]": "instead of Union[int, str]",
  "вызов конструктора предка": "call parent class constructor",
  "динамическое добавление атрибута": "dynamically adding attribute",
  "для изменяемых дефолтов!": "for mutable default values!",
  "добавить элемент": "add element",
  "доступ к переменной внешней функции": "access outer function variable",
  "если вернуть True — исключение будет подавлено": "returning True suppresses the exception",
  "занимает ~100 байт!": "takes only ~100 bytes of RAM!",
  "запуск в виртуальном окружении без ручной активации": "run in virtualenv without manual activation",
  "или a[:] — поверхностная копия (shallow copy)": "or a[:] — shallow copy",
  "криптографически стойкий токен! (для паролей, сессий)": "cryptographically strong token! (for auth, sessions)",
  "массовый UPDATE!": "bulk UPDATE query!",
  "матрица 3x3 из нулей": "3x3 zero matrix",
  "мгновенная установка пакетов из кэша": "instant cached package installation",
  "не нужно проверять if \"users\" in group!": "no need for if 'users' in group check!",
  "не равны": "not equal",
  "не упадет, если файла не было!": "does not fail if file was absent!",
  "неблокирующее ожидание! (НЕ time.sleep!)": "non-blocking delay! (NEVER time.sleep!)",
  "обновление на месте (in-place)": "in-place update",
  "обычный set ключом быть НЕ может!": "standard mutable set CANNOT be a dict key!",
  "отключает внутренний __dict__, экономит до 50% RAM!": "disables internal __dict__, saves up to 50% RAM!",
  "очищает весь список []": "clears the entire list []",
  "парсинг JSON из тела запроса": "parse JSON from request body",
  "передача объекта в тест": "inject fixture into test",
  "по умолчанию 0": "defaults to 0",
  "поиск без учета регистра": "case-insensitive search",
  "равны ли значения объектов": "whether object values are equal",
  "расширить списком (или nums += [50, 60])": "extend list (or nums += [50, 60])",
  "рекурсивный поиск всех .py": "recursive search for all .py files",
  "сверхбыстрый поиск ошибок и код-ревью": "blazing fast linting and code diagnostics",
  "создает .venv за 10 миллисекунд!": "creates .venv in 10 milliseconds!",
  "создать вложенные папки": "create parent folders if missing",
  "стандартное отклонение": "standard deviation",
  "статическая проверка типов": "static type checking",
  "существует ли?": "does it exist?",
  "то, что попадает в переменную после as": "bound to variable after as keyword",
  "только для игр/моделирования": "only for simulations/games (not security)",
  "топ-10 последних записей": "top 10 latest records",
  "точка выполнения кода внутри блока with": "execution point inside the with block",
  "удалить без ошибки если нет (в отличие от remove)": "discard without KeyError if missing",
  "удаляет диапазон элементов": "deletes slice of elements",
  "удаляет и возвращает значение": "pops and returns value",
  "удаляет и возвращает последний (60) — O(1)": "removes and returns last item (60) — O(1)",
  "удаляет и возвращает последний (key, value)": "removes and returns last (key, value) pair",
  "удаляет первое вхождение значения 20 (ValueError если нет)": "removes first occurrence of 20 (ValueError if absent)",
  "удаляет первый элемент (10) — O(n)": "removes first item (10) — O(n)",
  "указывают ли переменные на один и тот же объект в памяти (id(a) == id(b))": "whether variables point to the same object in memory (id(a) == id(b))",
  "читайте из окружения .env!": "read from .env environment variable!",
  "3. Set comprehension: {выражение for x in iter}": "3. Set comprehension: {expr for x in iter}",
  "3. TypedDict — типизация словарей с известной структурой": "3. TypedDict — type hinting dictionaries with fixed schema",
  "3. subprocess — запуск команд системы": "3. subprocess — running system processes",
  "3. suppress — элегантное подавление ожидаемых исключений": "3. suppress — cleanly suppress expected exceptions",
  "3. Блок else в циклах (выполняется, ТОЛЬКО если цикл НЕ был прерван через break!)": "3. Loop else clause (runs ONLY if loop was NOT terminated by break!)",
  "3. Встроенная база данных SQLite": "3. Built-in SQLite database",
  "3. Доступ по индексу и меткам:": "3. Index and label-based access:",
  "3. Комбинаторика: product, permutations, combinations": "3. Combinatorics: product, permutations, combinations",
  "3. Маршрут с параметром пути в URL": "3. Route with URL path parameter",
  "3. Подключение и создание таблиц": "3. Connection and table creation",
  "3. Проценты и системы счисления": "3. Percentages and number representations",
  "3. Сверхбыстрый менеджер uv (в 10-100 раз быстрее pip!):": "3. Ultra-fast uv manager (10-100x faster than pip!):",
  "3. Фикстуры: подготовка данных и teardown (очистка)": "3. Fixtures: data setup and teardown cleanup",
  "3.0 (среднее)": "3.0 (mean / average)",
  "3.3333... (всегда float)": "3.3333... (always float)",
  "4. CRUD операции в сессии:": "4. Session CRUD operations:",
  "4. Protocol — утиная типизация (интерфейсы)": "4. Protocol — structural duck typing (interfaces)",
  "4. Вложенный comprehension (разворачивание 2D матрицы в 1D)": "4. Nested comprehension (flatten 2D matrix into 1D list)",
  "4. Выравнивание и паддинг": "4. Alignment and padding",
  "4. Группировка (groupby):": "4. Grouping (groupby):",
  "4. Параметризация (один тест — много наборов данных!)": "4. Parametrization (one test, multiple data sets!)",
  "5. Дата и время напрямую в f-строке": "5. Date and time directly in f-string",
  "8080 (с безопасным дефолтом!)": "8080 (with safe default!)",
  "Counter({'яблоко': 3, 'банан': 2, 'груша': 1})": "Counter({'apple': 3, 'banana': 2, 'pear': 1})",
  "Create (Вставка)": "Create (Insert)",
  "False (0, 0.0, \"\", [], {}, set(), None — все False!)": "False (0, 0.0, \"\", [], {}, set(), None are all False!)",
  "GET запрос с query-параметрами": "GET request with query parameters",
  "GET: query параметры из строки ?limit=10": "GET: query parameters from ?limit=10",
  "Guard-условие": "Guard condition",
  "POST запрос с отправкой JSON:": "POST request sending JSON payload:",
  "Product(id=1, title='Клавиатура', price=4500.0, tags=[])": "Product(id=1, title='Keyboard', price=4500.0, tags=[])",
  "Read (Запрос через select)": "Read (Query via select)",
  "Ruff заменяет flake8, isort, black и pylint разом на скорости Rust:": "Ruff replaces flake8, isort, black and pylint simultaneously at Rust speed:",
  "True (все значения истинны)": "True (all items are truthy)",
  "True (или a &gt;= {1, 2})": "True (or a >= {1, 2})",
  "True (или {1, 2} &lt;= a)": "True (or {1, 2} <= a)",
  "True (можно ли вызвать через ())": "True (callable via () check)",
  "True (нет общих элементов)": "True (disjoint sets / no common items)",
  "True (проверка на один из нескольких типов)": "True (check against tuple of types)",
  "True (хотя бы одно истинно)": "True (at least one item is truthy)",
  "True — bool является наследником int": "True — bool is a subclass of int",
  "['четное', 'нечетное', 'четное', 'нечетное']": "['even', 'odd', 'even', 'odd']",
  "[('яблоко', 3), ('банан', 2)] — топ-2": "[('apple', 3), ('banana', 2)] — top 2",
  "[10, 15, 20, 30, 40] — O(n) по индексу": "[10, 15, 20, 30, 40] — O(n) insert by index",
  "[10, 20, 30, 40] — O(1) в конец": "[10, 20, 30, 40] — O(1) append to end",
  "[3, 4, 5] (булева фильтрация)": "[3, 4, 5] (boolean masking)",
  "_protected: соглашение об инкапсуляции": "_protected: encapsulation naming convention",
  "a=2, b=1 в одну строку!": "a=2, b=1 in a single line!",
  "any() и all() для проверки условий": "any() and all() for condition validation",
  "frozen=True делает объект неизменяемым и хэшируемым!": "frozen=True makes instance immutable and hashable!",
  "frozenset — неизменяемый аналог": "frozenset — immutable set alternative",
  "if-else перед for: [A if cond else B for x in iter]": "if-else before for: [A if cond else B for x in iter]",
  "setdefault: возвращает значение, а если нет ключа — добавляет с дефолтом": "setdefault: returns value, or inserts default if key absent",
  "yield from — делегирование генерации вложенному генератору": "yield from — delegation to sub-generator",
  "{1, 2, 3, 4} — Объединение (Union)": "{1, 2, 3, 4} — Union",
  "{1, 2, 3} — дубликаты отсекаются автоматически": "{1, 2, 3} — duplicates automatically discarded",
  "{1, 4} — Симметричная разность (XOR, без общих)": "{1, 4} — Symmetric difference (XOR)",
  "{1} — Разность (Difference, элементы только в a)": "{1} — Difference (elements only in a)",
  "{2, 3} — Пересечение (Intersection)": "{2, 3} — Intersection",
  "~104 байта! (колоссальная разница)": "~104 bytes! (colossal RAM difference)",
  "~8.5 МБ!": "~8.5 MB!",
  "Автоматический парсинг ответа в Python dict/list": "Automatic response parsing into Python dict/list",
  "Активация:": "Activation:",
  "Арифметика": "Arithmetic operations",
  "Атрибут класса (общий для всех экземпляров)": "Class attribute (shared across all instances)",
  "Базовые статистики:": "Summary statistics:",
  "Безопасное чтение с дефолтом (не выбрасывает KeyError!)": "Safe get with default (never raises KeyError!)",
  "Быстрее, потокобезопасно (исключает race conditions вида check-then-act)": "Faster, thread-safe (eliminates check-then-act race conditions)",
  "Быстрое чтение и запись без with open:": "Fast read and write without manual with open:",
  "В главном app.py:": "In main app.py:",
  "Вариант 1: asyncio.gather для параллельного запуска": "Option 1: asyncio.gather for parallel task execution",
  "Вариант 2: современный TaskGroup (Python 3.11+) — гарантирует отмену при ошибках": "Option 2: modern TaskGroup (Python 3.11+) — structured cancellation",
  "Векторизованные операции (без циклов for!):": "Vectorized operations (no for loops required!):",
  "Выборка данных": "Querying data",
  "Вызывает DoesNotExist, если нет!": "Raises DoesNotExist if record not found!",
  "Вызывает HTTPError, если статус 4xx или 5xx": "Raises HTTPError if status code is 4xx or 5xx",
  "Выполняется ВСЕГДА (даже при return или ошибке)": "ALWAYS runs (even on return or exception)",
  "Выполняется ТОЛЬКО если исключений НЕ возникло": "Runs ONLY when NO exceptions were raised",
  "Глубокая копия для вложенных структур:": "Deep copy for nested structures:",
  "ДОБРО: cursor.execute(\"SELECT * FROM users WHERE name = ?\", (name,))": "GOOD: cursor.execute(\"SELECT * FROM users WHERE name = ?\", (name,))",
  "Деструктуризация словаря": "Dictionary pattern destructuring",
  "Дефолтный случай (wildcard)": "Default wildcard case",
  "Добавление элементов": "Adding elements",
  "Документация доступна в браузере по адресу: http://127.0.0.1:8000/docs": "Interactive Swagger docs available at: http://127.0.0.1:8000/docs",
  "ЗЛО: cursor.execute(f\"SELECT * FROM users WHERE name = '{name}'\")": "BAD: cursor.execute(f\"SELECT * FROM users WHERE name = '{name}'\")",
  "ЗЛО: res = eval(user_input) -&gt; удаленный взлом сервера": "BAD: res = eval(user_input) -> remote code execution vulnerability",
  "Замер времени:": "Execution timing:",
  "Замыкание (Closure) и ключевое слово nonlocal": "Closure and nonlocal keyword",
  "Запуск в консоли: uvicorn main:app --reload": "Launch server: uvicorn main:app --reload",
  "Запуск приложения:": "Run application:",
  "Запятая обязательна! Без нее (42) — это просто число 42!": "Trailing comma is mandatory! Without it, (42) is just integer 42!",
  "Или через |": "Or using pipe | operator",
  "Инвертирование словаря (значения становятся ключами)": "Inverting dictionary (values become keys)",
  "Инспекция объектов: getattr, hasattr, setattr": "Object reflection: getattr, hasattr, setattr",
  "Использование operator.itemgetter (быстрее лямбды)": "Using operator.itemgetter (faster than lambda)",
  "Использование прямо внутри агрегирующих функций:": "Direct consumption inside aggregation functions:",
  "Используйте json, msgpack или pydantic вместо pickle.loads()": "Use json, msgpack, or pydantic instead of pickle.loads()",
  "Код после yield выполняется ПОСЛЕ завершения теста (очистка):": "Code after yield executes AFTER test completion (cleanup):",
  "Команды в терминале:": "Terminal commands:",
  "Кроссплатформенная склейка путей через слэш /": "Cross-platform path joining via division slash / operator",
  "Лямбда: lambda аргументы: выражение": "Lambda syntax: lambda args: expression",
  "Наследование": "Inheritance",
  "ОБЯЗАТЕЛЬНО: сохраняет имя, docstring и метаданные оригинальной функции!": "MANDATORY: preserves function name, docstring, and metadata!",
  "Обновление и удаление": "Update and delete",
  "Объединение типов через пайп | вместо Union и Optional": "Union types via pipe | operator instead of Union/Optional",
  "Оптимизация памяти через __slots__:": "Memory optimization with __slots__:",
  "Очистка и регистр": "Stripping whitespace and case conversion",
  "Ошибка! url нельзя передать как именованный: api_request(url=\"...\")": "Error! url cannot be passed as keyword: api_request(url=\"...\")",
  "ПРАВИЛЬНО: проверку на None всегда делать через is, а не ==": "CORRECT: always check None using is, not ==",
  "ПУСТОЕ множество! {} создает пустой dict!": "EMPTY set! {} creates an empty dict!",
  "Пауза здесь! Появится консоль (Pdb)": "Break here! Launches interactive (Pdb) console",
  "Побитовые операции": "Bitwise operations",
  "Поиск и замена": "Search and replace",
  "Поиск и счет": "Search and frequency counting",
  "Поиск файлов по маске (glob)": "File search by pattern (glob)",
  "Правильный вызов:": "Correct invocation:",
  "Проверки подмножеств": "Subset and superset checks",
  "Разделение и объединение": "Splitting and joining",
  "Распаковка кортежа": "Tuple unpacking",
  "Своп переменных без временной переменной": "Variable swap without temporary variable",
  "Сессия (сохраняет cookies, ускоряет соединения через Connection Pooling):": "Session (retains cookies, speeds up requests via Connection Pooling):",
  "Слияние словарей в Python 3.9+ через оператор |": "Dictionary union in Python 3.9+ via pipe | operator",
  "Слияние списков через распаковку": "List merging via unpacking"
},
    enToRu: {
  "'     right'": "'     право'",
  "'  center  '": "'  центр   '",
  "'!' - last character": "'!' — последний символ",
  "'!dlroW ,olleH' (instant string reversal!)": "'!dlroW ,olleH' (реверс строки в один миг!)",
  "'.csv' (file extension)": "'.csv' (расширение)",
  "'00042' (zero-padded)": "'00042' (дополнение нулями)",
  "'1,250,000.75' (thousands separator)": "'1,250,000.75' (разделитель тысяч)",
  "'1_250_000.75' (underscore separator)": "'1_250_000.75' (разделитель _)",
  "'2026' (stem / file name without extension)": "'2026' (имя без расширения)",
  "'2026.csv' (file name with extension)": "'2026.csv' (имя с расширением)",
  "'H' - first character": "'H' — первый символ",
  "'Hello' (from index 0 to 4)": "'Hello' (с 0 по 4 индекс)",
  "'Hello' (from start up to index 5)": "'Hello' (с начала до 5)",
  "'Hlo ol!' (every 2nd character)": "'Hlo ol!' (каждый 2-й символ)",
  "'World!' (from index 7 to the very end)": "'World!' (с 7 до самого конца)",
  "'ello, World' (slice without first and last char)": "'ello, World' (срез без первого и последнего символа)",
  "'ss' (more powerful than lower() for i18n)": "'ss' (мощнее lower() для интернационализации)",
  "'left      '": "'лево      '",
  "'test' (strips whitespace and newlines)": "'тест' (удаляет пробелы и переводы строк)",
  "(connect_timeout, read_timeout) — ALWAYS specify timeouts!": "(connect_timeout, read_timeout) — ВСЕГДА задавайте timeout!",
  "* separates keyword-only parameters (MUST pass name=val)": "* отделяет ключевые-только параметры (ОБЯЗАТЕЛЬНО передавать name=val)",
  "-4 ! (important: Python rounds towards negative infinity)": "-4 ! (важно: Python округляет к минус бесконечности)",
  "-6 (bitwise NOT: -(x + 1))": "-6 (побитовое НЕ / NOT: -(x + 1))",
  ".iloc[rows, cols] — integer position-based (0..n)": ".iloc[строки, колонки] — по числовым индексам (0..n)",
  ".loc[rows, cols] — label-based indexing": ".loc[строки, колонки] — по именам / меткам",
  "/ separates positional-only parameters (cannot pass name=val)": "/ отделяет позиционно-только параметры (нельзя передать name=val)",
  "1 (modulo / remainder)": "1 (остаток от деления)",
  "1 (bitwise AND)": "1 (побитовое И / AND)",
  "1. LBYL (Look Before You Leap) — C++/Java style with redundant checks:": "1. LBYL (Look Before You Leap) — стиль C++/Java с избыточными проверками:",
  "1. List comprehension: [expr for x in iter if condition]": "1. List comprehension: [выражение for x in iter if условие]",
  "1. Literal — strictly restricted literal values": "1. Literal — только строго определенные значения",
  "1. Pydantic request body validation schema": "1. Pydantic схема валидации тела запроса (Request Body)",
  "1. breakpoint() — pauses execution and launches the interactive debugger": "1. breakpoint() — останавливает выполнение и переходит в интерактивный отладчик",
  "1. chain — concatenate iterables without constructing an intermediate list": "1. chain — склеить несколько генераторов/списков без создания нового списка",
  "1. defaultdict — automatically initializes missing keys on first access": "1. defaultdict — автоматически инициализирует ключ при первом обращении",
  "1. enumerate — index and value tracking": "1. enumerate — индекс и значение",
  "1. Base declarative class": "1. Базовый декларативный класс",
  "1. Data model in blog/models.py": "1. Модель данных в blog/models.py",
  "1. NEVER use eval() or exec() on untrusted user strings": "1. НИКОГДА не используйте eval() или exec() на строках от пользователей",
  "1. Variable self-debugging (Python 3.8+)": "1. Отладка переменной (Python 3.8+)",
  "1. Simple route": "1. Простой маршрут",
  "1. Simple test using standard assert (clear failure diagnostics)": "1. Простой тест через обычный assert (понятные сообщения об ошибках)",
  "1. Synchronous Requests: pip install requests": "1. Синхронный Requests: pip install requests",
  "1. Class-based context manager": "1. Создание через класс",
  "1. Standard Python venv:": "1. Стандартный Python venv:",
  "1. Reading and saving:": "1. Чтение и сохранение:",
  "10 (parsed from binary base 2)": "10 (из двоичной системы)",
  "10 20 (index access works too)": "10 20 (и по индексу тоже работает)",
  "10 20 (attribute name access!)": "10 20 (обращение по имени!)",
  "16 (bitwise left shift: multiply by 2^4)": "16 (побитовый сдвиг влево: умножение на 2^4)",
  "2 (first index match, -1 if absent)": "2 (индекс первого совпадения, -1 если нет)",
  "2. Callable — function signature: Callable[[ArgTypes], ReturnType]": "2. Callable — сигнатура функции: Callable[[ArgTypes], ReturnType]",
  "2. Counter — rapid frequency counting": "2. Counter — быстрый подсчет частоты элементов",
  "2. EAFP (Easier to Ask for Forgiveness than Permission) — IDIOMATIC PYTHON:": "2. EAFP (Easier to Ask for Forgiveness than Permission) — ИДИОМАТИЧНЫЙ PYTHON:",
  "2. GET endpoint with Path and Query parameters": "2. GET эндпоинт с Path и Query параметрами",
  "2. JSON API endpoint supporting GET and POST": "2. JSON API с методами GET и POST",
  "2. islice — slice infinite/generator iterables [start, stop, step]": "2. islice — срез генератора [start, stop, step]",
  "2. random vs secrets (cryptographic security!)": "2. random vs secrets (безопасность!)",
  "2. zip — parallel iteration over multiple collections": "2. zip — параллельная итерация по двум и более коллекциям",
  "2. Rapid creation via @contextlib.contextmanager": "2. Быстрое создание через генератор @contextlib.contextmanager",
  "2. Row selection and boolean filtering:": "2. Выборка и фильтрация строк:",
  "2. Avoid SQL Injection: ALWAYS use query parameters (?, %s, :param)": "2. Избегайте SQL Injection: ВСЕГДА используйте параметры (?, %s, :param)",
  "2. Structured logging instead of print:": "2. Логирование вместо print:",
  "2. User model": "2. Модель пользователя",
  "2. Floating-point rounding and precision": "2. Округление и точность float",
  "2. Modern async HTTPX: pip install httpx": "2. Современный асинхронный HTTPX: pip install httpx",
  "2. Testing exceptions with pytest.raises": "2. Тестирование исключений",
  "2. Dependency management:": "2. Управление зависимостями:",
  "256 (exponentiation / power)": "256 (возведение в степень)",
  "3 (floor division, rounds towards -inf)": "3 (целочисленное деление, округление вниз к -inf)",
  "3. POST endpoint with automatic Pydantic validation": "3. POST эндпоинт с автовалидацией Pydantic",
  "3. Safe deserialization: pickle is UNSAFE for untrusted payloads!": "3. Безопасная десериализация: pickle ОПАСЕН для непроверенных данных!",
  "3. Cryptographically secure tokens (secrets):": "3. Генерация токенов и паролей (secrets):",
  "3. Grouping and aggregation (SQL GROUP BY equivalent):": "3. Группировка и агрегация (аналог SQL GROUP BY):",
  "3. Execution timer decorator": "3. Декоратор для замера времени выполнения",
  "3. Running system commands (subprocess):": "3. Запуск системных команд (subprocess):",
  "3. Parametrized tests (one test, multiple data sets)": "3. Параметризованные тесты (один тест — много входных данных)",
  "3. Working with dates and times (datetime):": "3. Работа с датой и временем (datetime):",
  "3. Table creation and DB session": "3. Создание таблиц и сессия",
  "3. product — Cartesian product (replaces nested loops)": "3. product — Декартово произведение (замена вложенным циклам)",
  "3.0 (regular division always produces a float)": "3.0 (обычное деление всегда дает float)",
  "4 (bitwise right shift: divide by 2^2)": "4 (побитовый сдвиг вправо: деление на 2^2)",
  "4. Dict comprehension: {key: val for x in iter}": "4. Dict comprehension: {ключ: знач for x in iter}",
  "4. Fast & Modern: 'uv' (written in Rust, 10-100x faster than pip!)": "4. Fast & Modern: 'uv' (написан на Rust, в 10-100 раз быстрее pip!)",
  "4. Fixtures for test data setup and teardown": "4. Fixtures (Фикстуры) для подготовки тестовых данных",
  "4. Never hardcode API keys, secrets, or passwords in code!": "4. Никогда не хардкодьте токены и пароли в коде!",
  "4. Jinja2 templates (render_template)": "4. Шаблоны Jinja2 (render_template)",
  "42 (string to int)": "42 (строка в целое)",
  "5. Set comprehension: {expr for x in iter}": "5. Set comprehension: {выражение for x in iter}",
  "5. Password hashing: use bcrypt / argon2 (NEVER md5 or raw sha256!)": "5. Хэширование паролей: используйте bcrypt / argon2 (НЕ md5 и НЕ sha256!)",
  "6 (bitwise XOR)": "6 (побитовое XOR)",
  "7 (bitwise OR)": "7 (побитовое ИЛИ / OR)",
  "8. Named expressions and column alignment": "8. Именованные f-строки и выравнивание",
  "False (0, 0.0, '', [], {}, set(), None are all False!)": "False (0, 0.0, '', [], {}, set(), None — все False!)",
  "False (verifies all items are truthy!)": "False (проверяет все!)",
  "False (empty dict)": "False (пустой словарь)",
  "JSON response body": "JSON тело ответа",
  "JSON automatically parsed into dict / list": "JSON парсится автоматически в dict / list",
  "ORM query: select, filter, and order by": "ORM запрос: выборка, фильтрация и сортировка",
  "True (whitespace string is truthy)": "True (строка с пробелом не пустая)",
  "True (at least one item is truthy)": "True (хотя бы одно истинно)",
  "True — recommended (respects inheritance)": "True — рекомендуется (учитывает наследование)",
  "['Hello', 'World', 'Python']": "['Hello', 'World', 'Python']",
  "['a', 'b', 'c']": "['a', 'b', 'c']",
  "['p', 'y', 't', 'h', 'o', 'n']": "['p', 'y', 't', 'h', 'o', 'n']",
  "[1, 2, 3, 4] — original list 'a' changed too!": "[1, 2, 3, 4] — список 'a' тоже изменился!",
  "[1, 4, 9, 16] (generator computes values on the fly!)": "[1, 4, 9, 16] (генератор вычисляет значения на лету!)",
  "[2, 3, 4, 5] (mapped output)": "[2, 3, 4, 5] (результат)",
  "[2, 4] (filtered even numbers)": "[2, 4] (только четные)",
  "[4, 16] (only evens squared)": "[4, 16] (только четные возведены в квадрат)",
  "\\n - newline": "\\n - перевод строки",
  "\\t - tab": "\\t - табуляция",
  "a and b point to independent objects!": "a и b ссылаются на разные объекты!",
  "args = (3, 4), kwargs = {'x': 10, 'y': 20}": "args = (3, 4), kwargs = {'x': 10, 'y': 20}",
  "break interrupted search — else does NOT execute!": "break прервал поиск — else НЕ выполнится!",
  "c['apple'] = 3, c['banana'] = 2": "c['apple'] = 3, c['banana'] = 2",
  "b references the EXACT SAME list!": "b ссылается на ТОТ ЖЕ список!",
  "Output: Caught custom error: Insufficient funds, code 402": "Выведет: Поймали кастомную ошибку: Недостаточно средств, код 402",
  "Output: Working with file...": "Выведет: Работаем с файлом...",
  "Output: File closed! Resources released.": "Выведет: Файл закрыт! Ресурсы освобождены.",
  "Output: Cleanup: closing connections...": "Выведет: Финализация: закрытие соединений...",
  "Output: Function slow_query took 0.1023s": "Выведет: Функция slow_query выполнялась 0.1023 сек",
  "Calling async coroutine with await (non-blocking!)": "Вызов асинхронной корутины через await (НЕ блокирует поток!)",
  "Call parent constructor via super()": "Вызов конструктора родителя (super)",
  "Invoking the function (await is mandatory!)": "Вызов функции (без await нельзя!)",
  "Execute raw SQL query directly": "Выполнить SQL напрямую (Raw SQL)",
  "ALWAYS runs (cleanup, closing sockets/files)": "Выполняется ВСЕГДА (очистка, закрытие сокетов/файлов)",
  "Runs ONLY if NO exceptions occurred": "Выполняется, если ошибок НЕ было",
  "Computing expensive result... (computed only once!)": "Выполняем тяжелый подсчет... (вычислится только 1 раз!)",
  "Consuming generator in a for loop:": "Вычисление генератора в цикле for:",
  "Computes 2^0, 2^1, ... on demand:": "Вычисляет 2^0, 2^1, ... по требованию:",
  "Generator finished": "Генератор завершился",
  "Generators do not store all items in memory!": "Генератор не хранит все числа в памяти!",
  "Grouping anagrams:": "Группировка анаграмм:",
  "Function decorators": "Декораторы функций",
  "Delegating to sub-generator with yield from:": "Делегирование вложенному генератору:",
  "Deserialization (reading):": "Десериализация (чтение):",
  "For mutable defaults, always use default_factory:": "Для изменяемых объектов по умолчанию — используйте default_factory:",
  "For immutable types (int, str, tuple), copy() returns self": "Для неизменяемых типов (числа, строки, tuple) copy() возвращает сам объект",
  "For deeply nested structures, use copy.deepcopy()!": "Для объектов с вложенными структурами используйте deepcopy!",
  "Adding new records": "Добавление новых записей",
  "Key bracket access: raises KeyError if key is missing!": "Доступ по ключу через скобки: KeyError если нет ключа!",
  "Run multiple tasks concurrently via asyncio.gather": "Запуск нескольких задач конкурентно (параллельно)",
  "Start development server:": "Запуск сервера разработки:",
  "Run test suite:": "Запуск тестов:",
  "Protection against missing file error": "Защита от ошибки отсутствия файла",
  "Exception hierarchy": "Иерархия исключений",
  "Pop and remove (defaults to last element)": "Извлечение с удалением (по умолчанию последний)",
  "Update value by key (or insert if absent)": "Изменение значения по ключу (или добавление нового)",
  "Keyword-only argument is MANDATORY": "Именованный аргумент (keyword-only) ОБЯЗАТЕЛЕН",
  "Indexing and slicing": "Индексация и срезы",
  "Python interpreter exits without waiting for daemon threads": "Интерпретатор завершит демон без ожидания",
  "Using @dataclass (5x less boilerplate)": "Использование @dataclass (в 5 раз меньше кода)",
  "Using pathlib:": "Использование Pathlib:",
  "Using sessionmaker": "Использование sessionmaker",
  "Using contextlib:": "Использование contextlib:",
  "Iterating over keys and values": "Итерация по ключам и значениям",
  "Creating an independent copy:": "Как сделать независимую копию:",
  "Standard boilerplate class": "Классический класс",
  "String concatenation": "Конкатенация строк",
  "Multiple inheritance": "Множественное наследование",
  "logging module": "Модуль logging",
  "math module": "Модуль math",
  "re module (Regular expressions)": "Модуль re (Регулярные выражения)",
  "Find maximum value": "Найти максимальное значение",
  "Inheriting from base model": "Наследование от базовой модели",
  "Immutable dictionary view (mappingproxy)": "Неизменяемый словарь (mappingproxy)",
  "Catching specific error": "Обработка конкретной ошибки",
  "Catching multiple exceptions in a tuple": "Обработка нескольких ошибок разом",
  "Regular function": "Обычная функция",
  "Restricting parameters: positional-only and keyword-only": "Ограничение параметров: позиционные и именованные",
  "Round to 2 decimal places": "Округление до 2 знаков после запятой",
  "Potentially failing code block": "Опасный код",
  "in operator checks key presence in O(1)": "Оператор in проверяет вхождение ключа (быстро O(1))",
  "Table schema definition": "Определение схемы таблицы",
  "Type checking": "Проверка типа",
  "__slots__ optimization": "Оптимизация __slots__",
  "Clear all elements": "Очистить все элементы",
  "Parallel CPU computations (multiprocessing)": "Параллельные вычисления (multiprocessing)",
  "Iterating through list items": "Перебор элементов списка",
  "Unpacking argument list (*args)": "Передача аргументов списком (*args)",
  "Unpacking keyword dict (**kwargs)": "Передача словарем (**kwargs)",
  "Enclosed variable remains accessible via closure": "Переменная останется доступна внутри",
  "Set intersection (&)": "Пересечение множеств (&)",
  "Frequency counting identical items": "Подсчет одинаковых элементов",
  "Find element index": "Поиск индекса элемента",
  "Polymorphism": "Полиморфизм",
  "Safe lookup via .get() with fallback (SAFE!)": "Получение значения по умолчанию через .get() (БЕЗОПАСНО!)",
  "Custom exception class": "Пользовательский класс исключения",
  "Daemon thread": "Поток демон",
  "Type casting": "Преобразование типов",
  "Casting to bool": "Приведение к типу bool",
  "Example 1: read stream/lines until sentinel": "Пример 1: чтение потока или строк до условия",
  "Example 2: check length without redundant recalculation": "Пример 2: проверка длины без повторного вычисления",
  "Example 3: in comprehension (avoid duplicate expensive call)": "Пример 3: в list comprehension (избегаем двойного вызова тяжелой функции)",
  "Usage example": "Пример использования",
  "Full try / except / else / finally lifecycle": "Пример с try / except / else / finally",
  "Membership check": "Проверка вхождения",
  "Check if empty": "Проверка на пустоту",
  "Subclass check": "Проверка подтипа",
  "Basic decorator": "Простой декоратор",
  "Simple generator": "Простой генератор",
  "Simple class": "Простой класс",
  "Working with CSV:": "Работа с CSV:",
  "Working with JSON:": "Работа с JSON:",
  "Working with SQLite:": "Работа с SQLite:",
  "Working with dictionaries": "Работа со словарями",
  "Working with strings": "Работа со строками",
  "Splitting string into words": "Разбиение строки на слова",
  "Set difference (-)": "Разница множеств (-)",
  "Unpacking": "Распаковка",
  "Dictionary unpacking": "Распаковка словарей",
  "Extend list with another list": "Расширение списка другим списком",
  "Recursive function": "Рекурсивная функция",
  "Properties with @property (getters & setters)": "Свойства @property (геттеры и сеттеры)",
  "One-to-many relationship (ForeignKey)": "Связь один-ко-многим (ForeignKey)",
  "Serialization (writing):": "Сериализация (запись):",
  "Symmetric difference (^)": "Симметрическая разность (^)",
  "Synchronous call": "Синхронный вызов",
  "Dictionary merging via unpacking": "Слияние словарей через распаковку",
  "Complex filters (Lookup expressions)": "Сложные фильтры (Lookup expressions)",
  "Custom error class with chaining (raise ... from ...)": "Собственный класс ошибки с цепочкой (raise ... from ...)",
  "Modern typed variant (typing.NamedTuple)": "Современный вариант с типами (typing.NamedTuple)",
  "Modern built-in collection generics (no typing imports needed!)": "Современный синтаксис встроенных коллекций (без импорта из typing!)",
  "Creating a DataFrame:": "Создание DataFrame:",
  "Create and save instance": "Создание и сохранение",
  "Tuple instantiation": "Создание кортежа",
  "Creating 1D and 2D arrays:": "Создание одномерных и двумерных массивов:",
  "Sorting with key function (lambda)": "Сортировка по ключу (лямбда)",
  "Descending sort via reverse=True": "Сортировка по убыванию через reverse=True",
  "Save to file with UTF-8 and formatting:": "Сохранение в файл с кириллицей и отступами:",
  "Comparing values vs object identity": "Сравнение значений и идентичности",
  "Memory usage comparison:": "Сравнение расхода памяти:",
  "Ternary operator (one-line if/else)": "Тернарный оператор (однострочный if)",
  "Entrypoint to run the async event loop:": "Точка входа для запуска асинхронного цикла:",
  "Removing prefixes and suffixes (Python 3.9+)": "Удаление префиксов и суффиксов (Python 3.9+)",
  "Removing elements": "Удаление элементов",
  "Universal function accepting *args and **kwargs": "Универсальная функция с *args и **kwargs",
  "Installation: pip install \"fastapi[standard]\" uvicorn": "Установка: pip install \"fastapi[standard]\" uvicorn",
  "Installation: pip install Flask": "Установка: pip install Flask",
  "Installation: pip install numpy pandas": "Установка: pip install numpy pandas",
  "Installation: pip install pytest": "Установка: pip install pytest",
  "Installation: pip install sqlalchemy": "Установка: pip install sqlalchemy",
  "Factory method (alternative class constructor)": "Фабричный метод (альтернативный конструктор)",
  "Chained comparisons": "Цепочка сравнений (Chained comparisons)",
  "Save gigabytes of memory on large datasets:": "Экономия гигабайт памяти на больших данных:",
  "auto-formatting code style": "автоформатирование стиля кода",
  "safe parameterized query!": "безопасный параметризованный запрос!",
  "instead of Optional[str]": "вместо Optional[str]",
  "instead of Union[int, str]": "вместо Union[int, str]",
  "call parent class constructor": "вызов конструктора предка",
  "dynamically adding attribute": "динамическое добавление атрибута",
  "for mutable default values!": "для изменяемых дефолтов!",
  "add element": "добавить элемент",
  "access outer function variable": "доступ к переменной внешней функции",
  "returning True suppresses the exception": "если вернуть True — исключение будет подавлено",
  "takes only ~100 bytes of RAM!": "занимает ~100 байт!",
  "run in virtualenv without manual activation": "запуск в виртуальном окружении без ручной активации",
  "or a[:] — shallow copy": "или a[:] — поверхностная копия (shallow copy)",
  "cryptographically strong token! (for auth, sessions)": "криптографически стойкий токен! (для паролей, сессий)",
  "bulk UPDATE query!": "массовый UPDATE!",
  "3x3 zero matrix": "матрица 3x3 из нулей",
  "instant cached package installation": "мгновенная установка пакетов из кэша",
  "no need for if 'users' in group check!": "не нужно проверять if \"users\" in group!",
  "not equal": "не равны",
  "does not fail if file was absent!": "не упадет, если файла не было!",
  "non-blocking delay! (NEVER time.sleep!)": "неблокирующее ожидание! (НЕ time.sleep!)",
  "in-place update": "обновление на месте (in-place)",
  "standard mutable set CANNOT be a dict key!": "обычный set ключом быть НЕ может!",
  "disables internal __dict__, saves up to 50% RAM!": "отключает внутренний __dict__, экономит до 50% RAM!",
  "clears the entire list []": "очищает весь список []",
  "parse JSON from request body": "парсинг JSON из тела запроса",
  "inject fixture into test": "передача объекта в тест",
  "defaults to 0": "по умолчанию 0",
  "case-insensitive search": "поиск без учета регистра",
  "whether object values are equal": "равны ли значения объектов",
  "extend list (or nums += [50, 60])": "расширить списком (или nums += [50, 60])",
  "recursive search for all .py files": "рекурсивный поиск всех .py",
  "blazing fast linting and code diagnostics": "сверхбыстрый поиск ошибок и код-ревью",
  "creates .venv in 10 milliseconds!": "создает .venv за 10 миллисекунд!",
  "create parent folders if missing": "создать вложенные папки",
  "standard deviation": "стандартное отклонение",
  "static type checking": "статическая проверка типов",
  "does it exist?": "существует ли?",
  "bound to variable after as keyword": "то, что попадает в переменную после as",
  "only for simulations/games (not security)": "только для игр/моделирования",
  "top 10 latest records": "топ-10 последних записей",
  "execution point inside the with block": "точка выполнения кода внутри блока with",
  "discard without KeyError if missing": "удалить без ошибки если нет (в отличие от remove)",
  "deletes slice of elements": "удаляет диапазон элементов",
  "pops and returns value": "удаляет и возвращает значение",
  "removes and returns last item (60) — O(1)": "удаляет и возвращает последний (60) — O(1)",
  "removes and returns last (key, value) pair": "удаляет и возвращает последний (key, value)",
  "removes first occurrence of 20 (ValueError if absent)": "удаляет первое вхождение значения 20 (ValueError если нет)",
  "removes first item (10) — O(n)": "удаляет первый элемент (10) — O(n)",
  "whether variables point to the same object in memory (id(a) == id(b))": "указывают ли переменные на один и тот же объект в памяти (id(a) == id(b))",
  "read from .env environment variable!": "читайте из окружения .env!",
  "3. Set comprehension: {expr for x in iter}": "3. Set comprehension: {выражение for x in iter}",
  "3. TypedDict — type hinting dictionaries with fixed schema": "3. TypedDict — типизация словарей с известной структурой",
  "3. subprocess — running system processes": "3. subprocess — запуск команд системы",
  "3. suppress — cleanly suppress expected exceptions": "3. suppress — элегантное подавление ожидаемых исключений",
  "3. Loop else clause (runs ONLY if loop was NOT terminated by break!)": "3. Блок else в циклах (выполняется, ТОЛЬКО если цикл НЕ был прерван через break!)",
  "3. Built-in SQLite database": "3. Встроенная база данных SQLite",
  "3. Index and label-based access:": "3. Доступ по индексу и меткам:",
  "3. Combinatorics: product, permutations, combinations": "3. Комбинаторика: product, permutations, combinations",
  "3. Route with URL path parameter": "3. Маршрут с параметром пути в URL",
  "3. Connection and table creation": "3. Подключение и создание таблиц",
  "3. Percentages and number representations": "3. Проценты и системы счисления",
  "3. Ultra-fast uv manager (10-100x faster than pip!):": "3. Сверхбыстрый менеджер uv (в 10-100 раз быстрее pip!):",
  "3. Fixtures: data setup and teardown cleanup": "3. Фикстуры: подготовка данных и teardown (очистка)",
  "3.0 (mean / average)": "3.0 (среднее)",
  "3.3333... (always float)": "3.3333... (всегда float)",
  "4. Session CRUD operations:": "4. CRUD операции в сессии:",
  "4. Protocol — structural duck typing (interfaces)": "4. Protocol — утиная типизация (интерфейсы)",
  "4. Nested comprehension (flatten 2D matrix into 1D list)": "4. Вложенный comprehension (разворачивание 2D матрицы в 1D)",
  "4. Alignment and padding": "4. Выравнивание и паддинг",
  "4. Grouping (groupby):": "4. Группировка (groupby):",
  "4. Parametrization (one test, multiple data sets!)": "4. Параметризация (один тест — много наборов данных!)",
  "5. Date and time directly in f-string": "5. Дата и время напрямую в f-строке",
  "8080 (with safe default!)": "8080 (с безопасным дефолтом!)",
  "Counter({'apple': 3, 'banana': 2, 'pear': 1})": "Counter({'яблоко': 3, 'банан': 2, 'груша': 1})",
  "Create (Insert)": "Create (Вставка)",
  "False (0, 0.0, \"\", [], {}, set(), None are all False!)": "False (0, 0.0, \"\", [], {}, set(), None — все False!)",
  "GET request with query parameters": "GET запрос с query-параметрами",
  "GET: query parameters from ?limit=10": "GET: query параметры из строки ?limit=10",
  "Guard condition": "Guard-условие",
  "POST request sending JSON payload:": "POST запрос с отправкой JSON:",
  "Product(id=1, title='Keyboard', price=4500.0, tags=[])": "Product(id=1, title='Клавиатура', price=4500.0, tags=[])",
  "Read (Query via select)": "Read (Запрос через select)",
  "Ruff replaces flake8, isort, black and pylint simultaneously at Rust speed:": "Ruff заменяет flake8, isort, black и pylint разом на скорости Rust:",
  "True (all items are truthy)": "True (все значения истинны)",
  "True (or a >= {1, 2})": "True (или a &gt;= {1, 2})",
  "True (or {1, 2} <= a)": "True (или {1, 2} &lt;= a)",
  "True (callable via () check)": "True (можно ли вызвать через ())",
  "True (disjoint sets / no common items)": "True (нет общих элементов)",
  "True (check against tuple of types)": "True (проверка на один из нескольких типов)",
  "True — bool is a subclass of int": "True — bool является наследником int",
  "['even', 'odd', 'even', 'odd']": "['четное', 'нечетное', 'четное', 'нечетное']",
  "[('apple', 3), ('banana', 2)] — top 2": "[('яблоко', 3), ('банан', 2)] — топ-2",
  "[10, 15, 20, 30, 40] — O(n) insert by index": "[10, 15, 20, 30, 40] — O(n) по индексу",
  "[10, 20, 30, 40] — O(1) append to end": "[10, 20, 30, 40] — O(1) в конец",
  "[3, 4, 5] (boolean masking)": "[3, 4, 5] (булева фильтрация)",
  "_protected: encapsulation naming convention": "_protected: соглашение об инкапсуляции",
  "a=2, b=1 in a single line!": "a=2, b=1 в одну строку!",
  "any() and all() for condition validation": "any() и all() для проверки условий",
  "frozen=True makes instance immutable and hashable!": "frozen=True делает объект неизменяемым и хэшируемым!",
  "frozenset — immutable set alternative": "frozenset — неизменяемый аналог",
  "if-else before for: [A if cond else B for x in iter]": "if-else перед for: [A if cond else B for x in iter]",
  "setdefault: returns value, or inserts default if key absent": "setdefault: возвращает значение, а если нет ключа — добавляет с дефолтом",
  "yield from — delegation to sub-generator": "yield from — делегирование генерации вложенному генератору",
  "{1, 2, 3, 4} — Union": "{1, 2, 3, 4} — Объединение (Union)",
  "{1, 2, 3} — duplicates automatically discarded": "{1, 2, 3} — дубликаты отсекаются автоматически",
  "{1, 4} — Symmetric difference (XOR)": "{1, 4} — Симметричная разность (XOR, без общих)",
  "{1} — Difference (elements only in a)": "{1} — Разность (Difference, элементы только в a)",
  "{2, 3} — Intersection": "{2, 3} — Пересечение (Intersection)",
  "~104 bytes! (colossal RAM difference)": "~104 байта! (колоссальная разница)",
  "~8.5 MB!": "~8.5 МБ!",
  "Automatic response parsing into Python dict/list": "Автоматический парсинг ответа в Python dict/list",
  "Activation:": "Активация:",
  "Arithmetic operations": "Арифметика",
  "Class attribute (shared across all instances)": "Атрибут класса (общий для всех экземпляров)",
  "Summary statistics:": "Базовые статистики:",
  "Safe get with default (never raises KeyError!)": "Безопасное чтение с дефолтом (не выбрасывает KeyError!)",
  "Faster, thread-safe (eliminates check-then-act race conditions)": "Быстрее, потокобезопасно (исключает race conditions вида check-then-act)",
  "Fast read and write without manual with open:": "Быстрое чтение и запись без with open:",
  "In main app.py:": "В главном app.py:",
  "Option 1: asyncio.gather for parallel task execution": "Вариант 1: asyncio.gather для параллельного запуска",
  "Option 2: modern TaskGroup (Python 3.11+) — structured cancellation": "Вариант 2: современный TaskGroup (Python 3.11+) — гарантирует отмену при ошибках",
  "Vectorized operations (no for loops required!):": "Векторизованные операции (без циклов for!):",
  "Querying data": "Выборка данных",
  "Raises DoesNotExist if record not found!": "Вызывает DoesNotExist, если нет!",
  "Raises HTTPError if status code is 4xx or 5xx": "Вызывает HTTPError, если статус 4xx или 5xx",
  "ALWAYS runs (even on return or exception)": "Выполняется ВСЕГДА (даже при return или ошибке)",
  "Runs ONLY when NO exceptions were raised": "Выполняется ТОЛЬКО если исключений НЕ возникло",
  "Deep copy for nested structures:": "Глубокая копия для вложенных структур:",
  "GOOD: cursor.execute(\"SELECT * FROM users WHERE name = ?\", (name,))": "ДОБРО: cursor.execute(\"SELECT * FROM users WHERE name = ?\", (name,))",
  "Dictionary pattern destructuring": "Деструктуризация словаря",
  "Default wildcard case": "Дефолтный случай (wildcard)",
  "Adding elements": "Добавление элементов",
  "Interactive Swagger docs available at: http://127.0.0.1:8000/docs": "Документация доступна в браузере по адресу: http://127.0.0.1:8000/docs",
  "BAD: cursor.execute(f\"SELECT * FROM users WHERE name = '{name}'\")": "ЗЛО: cursor.execute(f\"SELECT * FROM users WHERE name = '{name}'\")",
  "BAD: res = eval(user_input) -> remote code execution vulnerability": "ЗЛО: res = eval(user_input) -&gt; удаленный взлом сервера",
  "Execution timing:": "Замер времени:",
  "Closure and nonlocal keyword": "Замыкание (Closure) и ключевое слово nonlocal",
  "Launch server: uvicorn main:app --reload": "Запуск в консоли: uvicorn main:app --reload",
  "Run application:": "Запуск приложения:",
  "Trailing comma is mandatory! Without it, (42) is just integer 42!": "Запятая обязательна! Без нее (42) — это просто число 42!",
  "Or using pipe | operator": "Или через |",
  "Inverting dictionary (values become keys)": "Инвертирование словаря (значения становятся ключами)",
  "Object reflection: getattr, hasattr, setattr": "Инспекция объектов: getattr, hasattr, setattr",
  "Using operator.itemgetter (faster than lambda)": "Использование operator.itemgetter (быстрее лямбды)",
  "Direct consumption inside aggregation functions:": "Использование прямо внутри агрегирующих функций:",
  "Use json, msgpack, or pydantic instead of pickle.loads()": "Используйте json, msgpack или pydantic вместо pickle.loads()",
  "Code after yield executes AFTER test completion (cleanup):": "Код после yield выполняется ПОСЛЕ завершения теста (очистка):",
  "Terminal commands:": "Команды в терминале:",
  "Cross-platform path joining via division slash / operator": "Кроссплатформенная склейка путей через слэш /",
  "Lambda syntax: lambda args: expression": "Лямбда: lambda аргументы: выражение",
  "Inheritance": "Наследование",
  "MANDATORY: preserves function name, docstring, and metadata!": "ОБЯЗАТЕЛЬНО: сохраняет имя, docstring и метаданные оригинальной функции!",
  "Update and delete": "Обновление и удаление",
  "Union types via pipe | operator instead of Union/Optional": "Объединение типов через пайп | вместо Union и Optional",
  "Memory optimization with __slots__:": "Оптимизация памяти через __slots__:",
  "Stripping whitespace and case conversion": "Очистка и регистр",
  "Error! url cannot be passed as keyword: api_request(url=\"...\")": "Ошибка! url нельзя передать как именованный: api_request(url=\"...\")",
  "CORRECT: always check None using is, not ==": "ПРАВИЛЬНО: проверку на None всегда делать через is, а не ==",
  "EMPTY set! {} creates an empty dict!": "ПУСТОЕ множество! {} создает пустой dict!",
  "Break here! Launches interactive (Pdb) console": "Пауза здесь! Появится консоль (Pdb)",
  "Bitwise operations": "Побитовые операции",
  "Search and replace": "Поиск и замена",
  "Search and frequency counting": "Поиск и счет",
  "File search by pattern (glob)": "Поиск файлов по маске (glob)",
  "Correct invocation:": "Правильный вызов:",
  "Subset and superset checks": "Проверки подмножеств",
  "Splitting and joining": "Разделение и объединение",
  "Tuple unpacking": "Распаковка кортежа",
  "Variable swap without temporary variable": "Своп переменных без временной переменной",
  "Session (retains cookies, speeds up requests via Connection Pooling):": "Сессия (сохраняет cookies, ускоряет соединения через Connection Pooling):",
  "Dictionary union in Python 3.9+ via pipe | operator": "Слияние словарей в Python 3.9+ через оператор |",
  "List merging via unpacking": "Слияние списков через распаковку"
}
  }
};

if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
