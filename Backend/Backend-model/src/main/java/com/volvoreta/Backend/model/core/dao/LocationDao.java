package com.volvoreta.Backend.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "LocationDao")
@ConfigurationFile(
	configurationFile = "dao/LocationDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class LocationDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "id";
    public static final String NAME_LOCATION = "name_location";

}
