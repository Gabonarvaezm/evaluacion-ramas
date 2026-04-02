import sys
from pathlib import Path


PROJECT_DIR = Path(__file__).resolve().parent.parent / "evaluacion"

if str(PROJECT_DIR) not in sys.path:
    sys.path.insert(0, str(PROJECT_DIR))

from evaluacion.settings import *  # noqa: F401,F403


ROOT_URLCONF = "api.urls"
WSGI_APPLICATION = "api.wsgi.app"
