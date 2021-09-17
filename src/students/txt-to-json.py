import json
import sys

student_names = [name.strip() for name in sys.stdin.readlines()]

json.dump(student_names, sys.stdout, ensure_ascii=False)
