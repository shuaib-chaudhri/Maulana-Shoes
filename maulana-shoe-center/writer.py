import base64, sys, os
target = sys.argv[1]
b64 = sys.argv[2]
os.makedirs(os.path.dirname(os.path.abspath(target)), exist_ok=True)
data = base64.b64decode(b64).decode('utf-8')
with open(target, 'w', encoding='utf-8') as f:
    f.write(data)
print('Wrote:', target, len(data), 'bytes')
