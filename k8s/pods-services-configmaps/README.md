# Kubernetes: Pods, Services e ConfigMaps

- Pods: unidades do kubernetes, podem conter um ou mais containers
- Service: são as interfaces de comunicação, usados para comunicação interna no cluster ou externa com o mundo
- ConfigMaps: podem ser usados para armazenar variáveis de configuração, env vars...

 Alguns dos comandos mais usados:
```
  kubectl get [pods|services|nodes]
  kubectl delete [pods|services|nodes] nome_do_[pod|service|node]
  kubectl describe [pods|services|nodes] nome_do_[pod|service|node]
  kubectl apply -f path_pro_arquivo_de_conf.yaml
```