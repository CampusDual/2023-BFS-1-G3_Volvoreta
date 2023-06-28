package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IProductService;
import com.volvoreta.Backend.model.core.dao.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("ProductService")
public class ProductService implements IProductService {
    @Autowired
    private ProductDao productDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult productQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(productDao, keyMap, attrList);
    }

    @Override
    public EntityResult activeProductQuery(Map<String, Object> keyMap, List<String> attrList) {
        keyMap.put(ProductDao.ACTIVE, true);
        return this.daoHelper.query(productDao, keyMap, attrList);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult productInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(productDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult productUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        System.out.println("Esto es attr");
        for (String attr: attrMap.keySet()){
            System.out.println(attr);
            System.out.println(attrMap.get(attr));
        }
        System.out.println("Esto es key");
        for (String key: keyMap.keySet()){
            System.out.println(key);
            System.out.println(keyMap.get(key));
        }
        return this.daoHelper.update(productDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult productDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.productDao, keyMap);
    }

}
