t = []
y = []
with open("fires13-16v2.csv", "r") as f:
    for i in f.readlines():
        t.append(i)

for idx, j in enumerate(t):
    y.append(str(idx) + "," + j)

with open("fires16-2.csv", "w") as w:
    for k in y:
        w.writelines(k)
