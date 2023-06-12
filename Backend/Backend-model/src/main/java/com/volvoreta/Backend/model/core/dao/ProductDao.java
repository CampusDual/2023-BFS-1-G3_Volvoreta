package com.volvoreta.Backend.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "ProductDao")
@ConfigurationFile(
	configurationFile = "dao/ProductDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class ProductDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "id";
    public static final String NAME = "name";
    public static final String STOCK = "stock";
    public static final String PRICE = "price";
    public static final String PHOTO = "photo";
    public static final String ACTIVE = "active";
    public static final String STATE = "state";
    public static final String DATE_ADDED = "date_added";

}
